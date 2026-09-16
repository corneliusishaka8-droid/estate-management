import Head from "../componets/Head"
import Footer from "../componets/footer"
import { useState } from "react"
import { Link } from "react-router-dom"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import contactImage from "../assets/VNZFE5658.JPG"
import "../componets/contact.css"

function Contact() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="contact-page">
            <Head />
            <main>
                <section className="contact-hero">
                    <div className="contact-hero-copy">
                        <p className="contact-kicker">We&apos;d love to hear from you</p>
                        <h1>Let&apos;s find your <em>place.</em></h1>
                        <p>Whether you are searching for a home, listing a property, or simply have a question, our team is ready to help.</p>
                    </div>
                    <div className="contact-hero-note"><span>01</span><i /> <span>Open conversations</span></div>
                </section>

                <section className="contact-body">
                    <div className="contact-details">
                        <div className="contact-photo"><img src={contactImage} alt="Inviting contemporary home interior" /><span>Come as you are.<br />We&apos;ll take it from here.</span></div>
                        <div className="contact-info">
                            <p className="contact-kicker">Reach us directly</p>
                            <a href="mailto:info@cocoshomen.ng">info@cocoshomen.ng</a>
                            <a href="tel:+2348013056233">+234 801 305 6233</a>
                            <p className="contact-hours">Monday - Friday<br />9:00 am - 5:00 pm WAT</p>
                        </div>
                    </div>

                    <div className="contact-form-wrap">
                        {submitted ? (
                            <div className="contact-success" role="status">
                                <span className="success-mark">&#10003;</span>
                                <p className="contact-kicker">Message received</p>
                                <h2>We&apos;ll be in touch soon.</h2>
                                <p>Thank you for reaching out. A member of the Coco&apos;s Home team will get back to you shortly.</p>
                                <button className="contact-reset" type="button" onClick={() => setSubmitted(false)}>Send another message <ArrowForwardIcon className="action-icon" aria-hidden="true" /></button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="contact-form-heading"><p className="contact-kicker">Start here</p><h2>Tell us a little about what you need.</h2></div>
                                <label htmlFor="contact-name">Your name<input id="contact-name" name="name" type="text" placeholder="e.g. Esther Okafor" required /></label>
                                <label htmlFor="contact-email">Email address<input id="contact-email" name="email" type="email" placeholder="you@example.com" required /></label>
                                <label htmlFor="contact-interest">I&apos;m interested in<select id="contact-interest" name="interest" defaultValue=""><option value="" disabled>Select an option</option><option>Finding a home</option><option>Listing a property</option><option>Working with Coco&apos;s Home</option><option>Something else</option></select></label>
                                <label htmlFor="contact-message">Your message<textarea id="contact-message" name="message" rows="4" placeholder="Tell us what is on your mind..." required /></label>
                                <button className="contact-submit" type="submit">Send enquiry <ArrowForwardIcon className="action-icon" aria-hidden="true" /></button>
                                <p className="contact-privacy">By sending this form, you agree to our <Link to="/privacy">Privacy Policy</Link>.</p>
                            </form>
                        )}
                    </div>
                </section>

                <section className="contact-bottom">
                    <p className="contact-kicker">Prefer a proper hello?</p>
                    <h2>Our door is open.</h2>
                    <p>Come visit us at 12 Admiralty Way, Victoria Island, Lagos.</p>
                    <a className="contact-map-link" href="https://maps.google.com/?q=Victoria+Island+Lagos" target="_blank" rel="noreferrer">Find us on the map <OpenInNewIcon className="action-icon" aria-hidden="true" /></a>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Contact