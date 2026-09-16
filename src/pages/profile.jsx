import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import FavoriteIcon from "@mui/icons-material/Favorite"
import Head from "../componets/Head"
import Footer from "../componets/footer"
import avatar from "../assets/KGJS0041.PNG"
import { getSavedHomes, removeSavedHome } from "../info/savedHomes"
import "../componets/profile.css"

function Profile({ user }) {
    const navigate = useNavigate()
    const profileName = user?.name || ""
    const profileEmail = user?.email || ""
    const profilePhone = user?.phone || ""
    const [savedHomes, setSavedHomes] = useState(() => getSavedHomes())

    const removeHome = (homeId) => {
        setSavedHomes(removeSavedHome(homeId))
    }

    const logout = async () => {
        try {
            await fetch(`${(import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "")}/api/auth/logout`, {
                method: "POST",
                credentials: "include"
            })
        } finally {
            navigate("/login", { replace: true })
        }
    }

    return (
        <div className="profile-page">
            <Head />
            <main className="profile-main">
                <section className="profile-intro">
                    <div>
                        <p className="profile-eyebrow">Your home journey</p>
                        <h1>A space that feels like yours.</h1>
                        <p className="profile-lede">Keep your favourite places close, refine your search, and pick up exactly where you left off.</p>
                    </div>
                    <span className="profile-count">01 / account</span>
                </section>

                <section className="profile-layout">
                    <aside className="account-card">
                        <div className="account-heading">
                            <img src={user?.photo || avatar} alt={profileName} className="account-avatar" />
                            <div>
                                <p className="profile-eyebrow">Authenticated member</p>
                                <h2>{profileName}</h2>
                                <p>{user?.provider || ""}</p>
                            </div>
                        </div>
                        <div className="account-rule" />
                        <div className="account-details">
                            <div><span>Email</span><strong>{profileEmail}</strong></div>
                            <div><span>Phone</span><strong>{profilePhone}</strong></div>
                        </div>
                        <button className="outline-button" type="button"><EditOutlinedIcon className="action-icon" aria-hidden="true" /> Edit profile <ArrowForwardIcon className="action-icon" aria-hidden="true" /></button>
                        <button className="logout-button" type="button" onClick={logout}>Log out</button>
                    </aside>

                    <div className="profile-content">
                        <div className="profile-stats">
                            <div><strong>{savedHomes.length}</strong><span>Saved homes</span></div>
                            <div><strong>03</strong><span>Viewings booked</span></div>
                            <div><strong>02</strong><span>Active searches</span></div>
                        </div>

                        <section className="profile-section">
                            <div className="section-heading">
                                <div><p className="profile-eyebrow">Your shortlist</p><h2>Saved homes</h2></div>
                                <Link to="/prop">Explore all <ArrowForwardIcon className="action-icon" aria-hidden="true" /></Link>
                            </div>
                            {savedHomes.length ? savedHomes.map((savedHome) => <div className="saved-home" key={savedHome.id}>
                                <div className="saved-home-image" role="img" aria-label={savedHome.title} style={{ backgroundImage: `url("${savedHome.image}")` }} />
                                <div className="saved-home-info">
                                    <div className="saved-home-title"><div><p className="profile-eyebrow">Saved residence</p><h3>{savedHome.title}</h3></div><button className="heart-button" type="button" onClick={() => removeHome(savedHome.id)} aria-label="Remove saved home"><FavoriteIcon aria-hidden="true" /></button></div>
                                    <p>{savedHome.location}</p>
                                    <div className="saved-home-meta"><strong>{savedHome.price}</strong><span>{savedHome.beds} beds &nbsp; | &nbsp; {savedHome.baths} baths</span></div>
                                </div>
                            </div>) : <p className="saved-home-empty">Save a home from its detail page and it will appear here.</p>}
                        </section>

                        <section className="profile-section preferences-section">
                            <div className="section-heading"><div><p className="profile-eyebrow">Make it personal</p><h2>Search preferences</h2></div><button className="text-button" type="button"><EditOutlinedIcon className="action-icon" aria-hidden="true" /> Edit <ArrowForwardIcon className="action-icon" aria-hidden="true" /></button></div>
                            <div className="preference-list"><span>Long-term rental</span><span>Victoria Island</span><span>3 bedrooms</span><span>₦5m - ₦10m</span></div>
                        </section>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Profile