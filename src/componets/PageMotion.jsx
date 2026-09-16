import { useRef } from "react"
import { useLocation } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import "./App.css"

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

function PageMotion({ children }) {
    const scope = useRef(null)
    const { pathname } = useLocation()

    useGSAP(() => {
        const root = scope.current
        if (!root) return

        const textScrollStart = "top 80%"
        const revealScrollStart = "top 70%"
        const scrollEnd = "top 55%"
        const splitTargets = gsap.utils.toArray("h1, h2, h3, p", root)
            .filter((element) => element.textContent.trim())
        const splits = splitTargets.map((element) => {
            const split = SplitText.create(element, {
                type: "words",
                wordsClass: "motion-word",
                mask: "words"
            })

            gsap.fromTo(split.words, { yPercent: 105, opacity: 0 }, {
                yPercent: 0,
                opacity: 1,
                duration: 0.75,
                ease: "power3.out",
                stagger: 0.045,
                overwrite: true,
                scrollTrigger: {
                    trigger: element,
                    start: textScrollStart,
                    end: scrollEnd,
                    toggleActions: "play none none reverse"
                }
            })

            return split
        })

        gsap.fromTo(gsap.utils.toArray(".navdiv, .legal-header", root), { yPercent: -110, opacity: 0 }, {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            delay: 0.05
        })

        // Login controls must remain available immediately while other pages reveal on scroll.
        const revealTargets = gsap.utils.toArray(
            "main > section, main > article, main > div, .heroiv > div, .heroprop1, .follow, footer, " +
            ".result-card, .discovery-card, .profile-stats > div, .about-values-list article, .details-list > div, " +
            ".contact-form-wrap, .login-card, .legal-sections > section",
            root
        ).filter((item) => !item.closest(".login-page"))

        revealTargets.forEach((item, index) => {
            gsap.fromTo(item, { y: 42, opacity: 0 }, {
                y: 0,
                opacity: 1,
                duration: 0.85,
                delay: (index % 4) * 0.06,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: revealScrollStart,
                    end: scrollEnd,
                    toggleActions: "play none none reverse"
                }
            })
        })

        gsap.utils.toArray("img, form, button, a", root)
            .filter((element) => !element.closest(".navdiv, .legal-header, .login-page"))
            .forEach((element) => {
            gsap.fromTo(element, { opacity: 0, y: 18 }, {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: revealScrollStart,
                    end: scrollEnd,
                    toggleActions: "play none none reverse"
                }
            })
        })

        return () => splits.forEach((split) => split.revert())
    }, { scope, dependencies: [pathname], revertOnUpdate: true })

    return <div ref={scope} className="motion-scope">{children}</div>
}

export default PageMotion
