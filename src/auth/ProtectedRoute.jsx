import { cloneElement, useEffect, useState } from "react"
import { Navigate, useLocation } from "react-router-dom"

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000"

function ProtectedRoute({ children }) {
    const location = useLocation()
    const [state, setState] = useState({ loading: true, authenticated: false, user: null })

    useEffect(() => {
        let active = true

        // Credentials are required so the browser sends the HTTP-only session cookie.
        fetch(`${apiUrl}/api/auth/me`, { credentials: "include" })
            .then(async (response) => ({ ok: response.ok, body: response.ok ? await response.json() : null }))
            .catch(() => ({ ok: false }))
            .then((result) => {
                if (active) setState({ loading: false, authenticated: result.ok, user: result.body?.user || null })
            })

        return () => { active = false }
    }, [])

    if (state.loading) {
        return <main className="route-loading" aria-live="polite">Checking your account...</main>
    }

    if (!state.authenticated) {
        return <Navigate to="/login" replace state={{ from: location.pathname }} />
    }

    // Pass the server's OAuth profile into the protected page without duplicating the auth request.
    return cloneElement(children, { user: state.user })
}

export default ProtectedRoute