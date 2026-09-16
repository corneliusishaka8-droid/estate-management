import "./App.css"
import { useState } from "react"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import CloseIcon from "@mui/icons-material/Close"
import MenuIcon from "@mui/icons-material/Menu"

function Head(){
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    return(
        <div className={`navdiv${menuOpen ? " menu-is-open" : ""}`}>
            <nav>
                <h1>coco's home </h1>
                <ul className="navlinks">
                   <a href="/" onClick={closeMenu}> <li>home</li></a>
                    <a href="/about" onClick={closeMenu}><li>about</li></a>
                    <a href="/contact" onClick={closeMenu}><li>contact</li></a>
                   <a href="/prop" onClick={closeMenu}> <li>property</li></a>
                </ul>

                <a className="desktop-profile-link" href="/profile"><span className="btn1"><AccountCircleOutlinedIcon className="action-icon" aria-hidden="true" /> profile</span></a>
                <button
                    className="menu-toggle"
                    type="button"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <CloseIcon aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
                </button>
            </nav>
            <div className="mobile-menu" aria-hidden={!menuOpen}>
                <div className="mobile-menu-links">
                    <a href="/" onClick={closeMenu}>home</a>
                    <a href="/about" onClick={closeMenu}>about</a>
                    <a href="/contact" onClick={closeMenu}>contact</a>
                    <a href="/prop" onClick={closeMenu}>property</a>
                    <a className="mobile-profile-link" href="/profile" onClick={closeMenu}>
                        <AccountCircleOutlinedIcon className="action-icon" aria-hidden="true" /> profile
                    </a>
                </div>
            </div>
        </div>
    )
}

export default   Head