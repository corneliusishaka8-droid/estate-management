import { Link, useLocation } from "react-router-dom"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import "../componets/legal.css"

const legalContent = {
    "/privacy": {
        label: "Your privacy matters",
        title: "Privacy Policy",
        intro: "This policy explains what Coco's Home collects, why we collect it, and the choices you have when using our property platform.",
        sections: [
            ["Information we collect", "We collect information you provide when you contact us, create an account, save a property, or request a viewing. This may include your name, email address, phone number, and property preferences."],
            ["How we use information", "We use your information to provide our services, respond to enquiries, improve the Coco's Home experience, and send updates you have requested. We do not sell your personal information."],
            ["Your choices", "You can ask us to access, correct, or delete your personal information by contacting our team. You can also unsubscribe from non-essential messages at any time."],
            ["Contact us", "For privacy questions, email info@cocoshomen.ng. We will aim to respond within a reasonable time."]
        ]
    },
    "/terms": {
        label: "The small print, made clear",
        title: "Terms of Service",
        intro: "These terms set out the simple rules for using Coco's Home and help us keep the experience useful, respectful, and reliable for everyone.",
        sections: [
            ["Using Coco's Home", "You agree to provide accurate information and use this service only for lawful property searches, enquiries, and related communication. Keep your account details secure and let us know if you suspect unauthorised use."],
            ["Listings and viewings", "Property information is provided for guidance and may change. A listing or viewing request does not create a tenancy, sale, or other agreement. Please confirm important details with the relevant agent or owner."],
            ["Our content", "The Coco's Home name, design, and original content belong to us or our partners. You may use the platform for personal purposes, but you may not copy, alter, or redistribute its content without permission."],
            ["Contact us", "Questions about these terms can be sent to info@cocoshomen.ng. We may update these terms when our services change and will make the current version available here."]
        ]
    }
}

function Legal() {
    const { pathname } = useLocation()
    const content = legalContent[pathname] || legalContent["/privacy"]

    return (
        <main className="legal-page">
            <header className="legal-header">
                <Link className="legal-brand" to="/"><span className="brand-mark">C</span> Coco&apos;s Home</Link>
                <Link className="legal-back" to="/login">Back to sign in <ArrowForwardIcon className="action-icon" aria-hidden="true" /></Link>
            </header>
            <article className="legal-content">
                <p className="eyebrow">{content.label}</p>
                <h1>{content.title}</h1>
                <p className="legal-intro">{content.intro}</p>
                <p className="legal-updated">Last updated September 2026</p>
                <div className="legal-sections">
                    {content.sections.map(([heading, text]) => (
                        <section key={heading}>
                            <h2>{heading}</h2>
                            <p>{text}</p>
                        </section>
                    ))}
                </div>
            </article>
        </main>
    )
}

export default Legal