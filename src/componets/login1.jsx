
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import "./login.css"

function Login() {
    const navigate = useNavigate()
    const location = useLocation()
    const [message] = useState(new URLSearchParams(location.search).get("error") ? "Sign in was not completed. Please try again." : "")
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000"

    const startSignIn = (provider) => {
        window.location.assign(`${apiUrl}/auth/${provider}`)
    }

    return (
        <main className="login-page">
            <section className="login-visual" aria-label="Coco's Home welcome">
                <Link className="login-brand" to="/">
                    <span className="brand-mark">C</span>
                    <span>Coco's Home</span>
                </Link>
                <div className="visual-copy">
                    <p className="eyebrow">A place to belong</p>
                    <h1>Come home to spaces that feel like you.</h1>
                    <p>Save your favourite spaces, keep track of viewings, and find the place where your next chapter begins.</p>
                </div>
                <div className="visual-footer">
                    <span>01</span>
                    <span className="visual-line" />
                    <span>Find your feeling</span>
                </div>
            </section>

            <section className="login-panel">
                <button className="back-link" type="button" onClick={() => navigate(-1)}>
                    <ArrowBackIcon className="action-icon" aria-hidden="true" /> Back
                </button>
                <div className="login-card">
                    <div className="card-intro">
                        <p className="eyebrow">Welcome back</p>
                        <h2>Let&apos;s get you settled.</h2>
                        <p>Enter with your preferred sign-in option.</p>
                    </div>

                    <div className="social-options">
                        <button className="social-button social-google" type="button" onClick={() => startSignIn("google")}>
                            <span className="social-icon">G</span>
                            Continue with Google
                        </button>
                        <div className="divider"><span>or continue with</span></div>
                        <div className="secondary-options">
                            <button className="social-button compact" type="button" onClick={() => startSignIn("facebook")}>
                                <span className="social-icon">f</span> Facebook
                            </button>
                            <button className="social-button compact" type="button" onClick={() => startSignIn("twitter")}>
                                <span className="social-icon">&#120143;</span> X
                            </button>
                        </div>
                    </div>

                    <p className={`login-message${message ? " is-visible" : ""}`} role="status">{message}</p>
                    <p className="consent-copy">
                        By continuing, you agree to our <Link to="/terms">Terms of Service</Link> and acknowledge our <Link to="/privacy">Privacy Policy</Link>.
                    </p>
                </div>
                <p className="login-help">New to Coco&apos;s Home? <Link to="/contact">Talk to our team</Link></p>
            </section>
        </main>
    )
}

export default Login