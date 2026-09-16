import "dotenv/config"
import cors from "cors"
import cookieParser from "cookie-parser"
import express from "express"
import session from "express-session"
import passport from "passport"
import { Strategy as FacebookStrategy } from "passport-facebook"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { Strategy as TwitterStrategy } from "passport-twitter"

const app = express()
const port = Number(process.env.PORT || 5000)
const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173"
const sessionCookieName = process.env.SESSION_COOKIE_NAME || "cocos_home_sid"
const sessionMaxAge = 24 * 60 * 60 * 1000

if (!process.env.SESSION_SECRET || process.env.SESSION_SECRET === "replace-with-a-long-random-secret") {
    throw new Error("SESSION_SECRET must be set to a long random value")
}

const cookieSecure = process.env.SESSION_COOKIE_SECURE === "true"
const cookieSameSite = process.env.SESSION_COOKIE_SAME_SITE || "lax"

app.set("trust proxy", 1)
app.use(cors({ origin: frontendUrl, credentials: true }))
app.use(express.json())
app.use(cookieParser())
// Keep the browser session short-lived and inaccessible to client-side JavaScript.
app.use(session({
    name: sessionCookieName,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: sessionMaxAge,
        httpOnly: true,
        secure: cookieSecure,
        sameSite: cookieSameSite,
        ...(process.env.SESSION_COOKIE_DOMAIN ? { domain: process.env.SESSION_COOKIE_DOMAIN } : {})
    }
}))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

const configuredStrategies = new Set()

function registerStrategy(name, Strategy, options, verify) {
    // A provider is enabled only when all of its credentials exist in the environment.
    if (Object.values(options).some((value) => !value)) return
    passport.use(name, new Strategy(options, verify))
    configuredStrategies.add(name)
}

const createUser = (provider, profile) => ({
    id: profile.id,
    provider,
    name: profile.displayName || profile.username || "Coco's Home member",
    email: profile.emails?.[0]?.value || null,
    photo: profile.photos?.[0]?.value || null
})

registerStrategy("facebook", FacebookStrategy, {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ["id", "displayName", "email", "photos"]
}, (accessToken, refreshToken, profile, done) => done(null, createUser("facebook", profile)))

registerStrategy("google", GoogleStrategy, {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
}, (accessToken, refreshToken, profile, done) => done(null, createUser("google", profile)))

registerStrategy("twitter", TwitterStrategy, {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: process.env.TWITTER_CALLBACK_URL,
    includeEmail: true
}, (token, tokenSecret, profile, done) => done(null, createUser("twitter", profile)))

function requireStrategy(name, response) {
    if (!configuredStrategies.has(name)) {
        response.status(503).json({ error: `${name} authentication is not configured` })
        return false
    }
    return true
}

function redirectToLogin(error) {
    const suffix = error ? `?error=${encodeURIComponent(error)}` : ""
    return `${frontendUrl}/login${suffix}`
}

app.get("/api/health", (request, response) => response.json({ ok: true }))

app.get("/api/auth/me", (request, response) => {
    // The frontend uses this endpoint to populate and protect the profile page.
    if (!request.user) return response.status(401).json({ authenticated: false })
    return response.json({ authenticated: true, user: request.user })
})

app.get("/auth/facebook", (request, response, next) => {
    if (!requireStrategy("facebook", response)) return
    passport.authenticate("facebook", { scope: ["email"] })(request, response, next)
})

app.get("/auth/facebook/callback", passport.authenticate("facebook", { failureRedirect: redirectToLogin("facebook") }), (request, response) => response.redirect(`${frontendUrl}/profile`))

app.get("/auth/google", (request, response, next) => {
    if (!requireStrategy("google", response)) return
    passport.authenticate("google", { scope: ["profile", "email"] })(request, response, next)
})

app.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: redirectToLogin("google") }), (request, response) => response.redirect(`${frontendUrl}/profile`))

app.get("/auth/twitter", (request, response, next) => {
    if (!requireStrategy("twitter", response)) return
    passport.authenticate("twitter")(request, response, next)
})

app.get("/auth/twitter/callback", passport.authenticate("twitter", { failureRedirect: redirectToLogin("twitter") }), (request, response) => response.redirect(`${frontendUrl}/profile`))

app.post("/api/auth/logout", (request, response, next) => {
    request.logout((logoutError) => {
        if (logoutError) return next(logoutError)
        request.session.destroy((sessionError) => {
            if (sessionError) return next(sessionError)
            response.clearCookie(sessionCookieName, { httpOnly: true, secure: cookieSecure, sameSite: cookieSameSite })
            return response.status(204).end()
        })
    })
})

app.use((error, request, response, next) => {
    console.error(error)
    if (response.headersSent) return next(error)
    return response.status(500).json({ error: "Authentication service error" })
})

app.listen(port, () => console.log(`Coco's Home backend listening on http://localhost:${port}`))