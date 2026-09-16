import { Link } from "react-router-dom"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import FavoriteIcon from "@mui/icons-material/Favorite"
import Head from "../componets/Head"
import Footer from "../componets/footer"
import avatar from "../assets/KGJS0041.PNG"
import "../componets/profile.css"

function Profile({ user }) {
    const profileName = user?.name || "Coco's Home member"
    const profileEmail = user?.email || "Email not provided by provider"

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
                                <p>{user?.provider || "Coco's Home"}</p>
                            </div>
                        </div>
                        <div className="account-rule" />
                        <div className="account-details">
                            <div><span>Email</span><strong>{profileEmail}</strong></div>
                            <div><span>Phone</span><strong>+234 801 305 6233</strong></div>
                        </div>
                        <button className="outline-button" type="button"><EditOutlinedIcon className="action-icon" aria-hidden="true" /> Edit profile <ArrowForwardIcon className="action-icon" aria-hidden="true" /></button>
                    </aside>

                    <div className="profile-content">
                        <div className="profile-stats">
                            <div><strong>12</strong><span>Saved homes</span></div>
                            <div><strong>03</strong><span>Viewings booked</span></div>
                            <div><strong>02</strong><span>Active searches</span></div>
                        </div>

                        <section className="profile-section">
                            <div className="section-heading">
                                <div><p className="profile-eyebrow">Your shortlist</p><h2>Saved homes</h2></div>
                                <Link to="/prop">Explore all <ArrowForwardIcon className="action-icon" aria-hidden="true" /></Link>
                            </div>
                            <div className="saved-home">
                                <div className="saved-home-image" role="img" aria-label="Bright modern home interior" />
                                <div className="saved-home-info">
                                    <div className="saved-home-title"><div><p className="profile-eyebrow">Featured residence</p><h3>Sunlit three-bedroom home</h3></div><button className="heart-button" type="button" aria-label="Remove saved home"><FavoriteIcon aria-hidden="true" /></button></div>
                                    <p>Victoria Island, Lagos</p>
                                    <div className="saved-home-meta"><strong>&#8358; 8,500,000 <small>/ year</small></strong><span>3 beds &nbsp; | &nbsp; 2 baths</span></div>
                                </div>
                            </div>
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