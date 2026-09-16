import { useState } from "react"
import { Link } from "react-router-dom"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import Head from "../componets/Head"
import Footer from "../componets/footer"
import houseImage from "../assets/PEBC1100 (2).PNG"
import interiorImage from "../assets/dup2.PNG"
import "../componets/viewmore.css"

const discoveryProperties = [
	{
		type: "Landed property",
		title: "Palm-lined corner plot",
		location: "Epe, Lagos",
		price: "₦18,000,000",
		image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85"
	},
	{
		type: "Landed property",
		title: "A quiet piece of tomorrow",
		location: "Ibeju-Lekki, Lagos",
		price: "₦25,500,000",
		image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85"
	},
	{
		type: "Office space",
		title: "The light-filled studio",
		location: "Yaba, Lagos",
		price: "₦6,500,000 / year",
		image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85"
	},
	{
		type: "Office space",
		title: "A calm place to build",
		location: "Victoria Island, Lagos",
		price: "₦12,000,000 / year",
		image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85"
	}
]

function QuantityControl({ label, value, setValue, minimum = 0 }) {
	return (
		<div className="quantity-control">
			<span>{label}</span>
			<div className="quantity-actions">
				<button type="button" onClick={() => setValue(Math.max(minimum, value - 1))} aria-label={`Decrease ${label}`}>&#8722;</button>
				<strong>{String(value).padStart(2, "0")}</strong>
				<button type="button" onClick={() => setValue(value + 1)} aria-label={`Increase ${label}`}>&#43;</button>
			</div>
		</div>
	)
}

function View() {
	const [bedrooms, setBedrooms] = useState(3)
	const [bathrooms, setBathrooms] = useState(2)
	const [parking, setParking] = useState(1)
	const [saved, setSaved] = useState(false)

	return (
		<div className="viewmore-page">
			<Head />
			<main className="viewmore-main">
				<div className="viewmore-breadcrumb"><Link to="/prop">Properties</Link><span>/</span><span>Featured residence</span></div>
				<section className="featured-property">
					<div className="featured-gallery">
						<img className="featured-image" src={houseImage} alt="Spacious contemporary home with warm neutral interiors" />
						<div className="gallery-label"><span>01</span><i /><span>Featured residence</span></div>
					</div>
					<div className="featured-copy">
												<div className="featured-heading"><div><p className="viewmore-kicker">The house on the hill</p><h1>Room to breathe.</h1></div><button className={`save-button${saved ? " is-saved" : ""}`} type="button" onClick={() => setSaved(!saved)} aria-label={saved ? "Remove from saved homes" : "Save home"}>{saved ? <FavoriteIcon aria-hidden="true" /> : <FavoriteBorderIcon aria-hidden="true" />}</button></div>
						<p className="featured-location">Lekki Phase 1, Lagos &nbsp; / &nbsp; For sale</p>
						<p className="featured-description">An easy, light-filled home designed around the way life actually happens. Soft morning light moves across the open living room, while three quiet bedrooms give everyone a corner to call their own.</p>
						<div className="featured-price"><strong>₦85,000,000</strong><span>Freehold</span></div>
						<div className="property-quantities">
							<QuantityControl label="Bedrooms" value={bedrooms} setValue={setBedrooms} minimum={1} />
							<QuantityControl label="Bathrooms" value={bathrooms} setValue={setBathrooms} minimum={1} />
							<QuantityControl label="Parking spaces" value={parking} setValue={setParking} />
						</div>
												<Link className="viewmore-action" to="/contact">Book a private viewing <ArrowForwardIcon className="action-icon" aria-hidden="true" /></Link>
					</div>
				</section>

				<section className="house-story">
					<div><p className="viewmore-kicker">A closer look</p><h2>Designed for the everyday <em>beautiful.</em></h2></div>
					<div className="house-story-copy"><p>There is a natural ease to this home. The kitchen opens onto a generous living space, the garden gives the afternoon somewhere to go, and every finish has been chosen to age with grace.</p><p>Set in a peaceful pocket of Lekki Phase 1, it is close enough to the city for everything you need and quiet enough to hear yourself think.</p></div>
				</section>

				<section className="house-details">
					<img src={interiorImage} alt="Interior detail from the featured home" />
					<div className="details-list"><div><span>Property type</span><strong>Detached home</strong></div><div><span>Floor area</span><strong>310 sqm</strong></div><div><span>Outdoor space</span><strong>Private garden</strong></div><div><span>Availability</span><strong>Ready to move in</strong></div></div>
				</section>

				<section className="discovery-section">
					<div className="discovery-heading"><div><p className="viewmore-kicker">Keep exploring</p><h2>Spaces with potential.</h2></div><p>From a fresh piece of land to a place for your next big idea, there is more to discover.</p></div>
					<div className="discovery-grid">{discoveryProperties.map((property) => <article className="discovery-card" key={property.title}><div className="discovery-image"><img src={property.image} alt={property.title} loading="lazy" /><span>{property.type}</span></div><div className="discovery-card-copy"><div><h3>{property.title}</h3><p>{property.location}</p></div><strong>{property.price}</strong></div></article>)}</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}

export default View