import { useEffect, useState } from "react"
import { Navigate, useLocation } from "react-router-dom"

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000"

function ProtectedRoute({ children }) {
    const location = useLocation()
    const [state, setState] = useState({ loading: true, authenticated: false })

    useEffect(() => {
        let active = true

        fetch(`${apiUrl}/api/auth/me`, { credentials: "include" })
            .then((response) => ({ ok: response.ok }))
            .catch(() => ({ ok: false }))
            .then((result) => {
                if (active) setState({ loading: false, authenticated: result.ok })
            })

        return () => { active = false }
    }, [])

    if (state.loading) {
        return <main className="route-loading" aria-live="polite">Checking your account...</main>
    }

    if (!state.authenticated) {
        return <Navigate to="/login" replace state={{ from: location.pathname }} />
    }

    return children
}

export default ProtectedRoute