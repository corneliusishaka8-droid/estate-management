import Head from "../componets/Head"
import Footer from "../componets/footer"
import { Link } from "react-router-dom"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import heroImage from "../assets/PEBC1100 (2).PNG"
import detailImage from "../assets/dup2.PNG"
import portraitImage from "../assets/KGJS0041.PNG"
import "../componets/about.css"

function About() {

    return (
        <div className="about-page">
            <Head />
            <main>
                <section className="about-hero">
                    <div className="about-hero-copy">
                        <p className="about-kicker">More than a place to live</p>
                        <h1>Homes with a little more <em>feeling.</em></h1>
                        <p className="about-hero-text">Coco&apos;s Home brings people and the right spaces together with clarity, care, and a distinctly human point of view.</p>
                        <Link className="about-primary-link" to="/prop">Explore our spaces <ArrowForwardIcon className="action-icon" aria-hidden="true" /></Link>
                    </div>
                    <div className="about-hero-art">
                        <div className="about-hero-image"><img src={heroImage} alt="Warm, sunlit modern home interior" /></div>
                        <span className="about-stamp">Since<br /><strong>2024</strong></span>
                        <p className="about-image-note">Thoughtful spaces<br />for real life.</p>
                    </div>
                </section>

                <section className="about-statement">
                    <p className="about-kicker">The Coco&apos;s Home difference</p>
                    <div className="about-statement-grid">
                        <h2>Property search should feel like a conversation, not a chore.</h2>
                        <div>
                            <p>We believe finding a home is about more than square footage and a list of features. It is about the morning light, the walk home, the feeling you get when you open the door.</p>
                            <p>That is why we pair considered listings with honest guidance, helping you move through every decision with confidence.</p>
                        </div>
                    </div>
                </section>

                <section className="about-proof">
                    <div className="about-proof-image"><img src={detailImage} alt="Details of a carefully designed home" /></div>
                    <div className="about-proof-content">
                        <p className="about-kicker">Built around people</p>
                        <h2>A more thoughtful way to find your next address.</h2>
                        <div className="about-stat-row">
                            <div><strong>01</strong><span>Personal guidance</span></div>
                            <div><strong>02</strong><span>Honest listings</span></div>
                            <div><strong>03</strong><span>Lasting relationships</span></div>
                        </div>
                    </div>
                </section>

                <section className="about-values">
                    <div className="about-values-heading">
                        <p className="about-kicker">What we stand for</p>
                        <h2>Good spaces.<br /><em>Good sense.</em></h2>
                    </div>
                    <div className="about-values-list">
                        <article><span>01</span><div><h3>Clarity at every turn</h3><p>No confusing language or hidden surprises. We make the important details easy to understand.</p></div></article>
                        <article><span>02</span><div><h3>Character over catalogue</h3><p>We look for the details that make a space feel alive, not just the features that fill a brochure.</p></div></article>
                        <article><span>03</span><div><h3>Care that continues</h3><p>Our relationship does not end when you find a key. We are here for the next question too.</p></div></article>
                    </div>
                </section>

                <section className="about-team">
                    <div className="about-team-copy"><p className="about-kicker">A small team with a big view</p><h2>Here to help you feel at home.</h2><p>From first search to final signature, our team brings local knowledge and a calm, considered approach to every move.</p><Link className="about-text-link" to="/contact">Meet us in conversation <ArrowForwardIcon className="action-icon" aria-hidden="true" /></Link></div>
                    <div className="about-team-card"><img src={portraitImage} alt="Esther Okafor, Coco's Home team" /><div><p>Esther Okafor</p><span>Home specialist</span></div></div>
                </section>

                <section className="about-cta"><p className="about-kicker">Your next chapter starts here</p><h2>Let&apos;s find a place<br /><em>to call yours.</em></h2><Link className="about-light-link" to="/contact">Start a conversation <ArrowForwardIcon className="action-icon" aria-hidden="true" /></Link></section>
            </main>
            <Footer />
        </div>
    )
}

export default About