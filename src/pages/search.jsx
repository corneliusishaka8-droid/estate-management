import { Link, useSearchParams } from "react-router-dom"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Head from "../componets/Head"
import Footer from "../componets/footer"
import properties from "../info/properties"
import "../componets/search.css"

function matchesProperty(property, query) {
    const normalizedQuery = query.toLowerCase().trim()
    if (!normalizedQuery) return false
    if (["property", "properties", "home", "homes", "all"].includes(normalizedQuery)) return true

    const searchText = `${property.title} ${property.type} ${property.location} ${property.description}`.toLowerCase()
    const terms = normalizedQuery.split(/\s+/).filter(Boolean)
    const isResidential = normalizedQuery.includes("residential") && !["office", "land"].some((term) => searchText.includes(term))
    const isCommercial = normalizedQuery.includes("commercial") && property.type.toLowerCase().includes("office")
    const isLand = normalizedQuery.includes("land") && property.type.toLowerCase().includes("land")

    return (isResidential || isCommercial || isLand) || terms.some((term) => searchText.includes(term))
}

function Search() {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q") || ""
    const results = properties.filter((property) => matchesProperty(property, query))

    return (
        <div className="search-page">
            <Head />
            <main className="search-main">
                <div className="search-heading">
                    <div><p className="search-kicker">Your search, thoughtfully filtered</p><h1>{query ? "Places worth a closer look." : "Start with a search."}</h1><p>{query ? `${results.length} properties matching “${query}”` : "Use the search on the home or property page to reveal available spaces."}</p></div>
                    {query && <Link className="search-back" to="/prop">Adjust search <ArrowForwardIcon className="action-icon" aria-hidden="true" /></Link>}
                </div>

                {!query ? (
                    <section className="search-empty"><span>01</span><h2>Nothing is open here yet.</h2><p>Your results will appear after you search for a location, property type, or keyword.</p><Link to="/">Back to home <ArrowForwardIcon className="action-icon" aria-hidden="true" /></Link></section>
                ) : results.length === 0 ? (
                    <section className="search-empty"><span>00</span><h2>Let&apos;s try a different direction.</h2><p>We could not find a match for “{query}”. Try searching for Lagos, duplex, bungalow, office, or land.</p><Link to="/prop">Search again <ArrowForwardIcon className="action-icon" aria-hidden="true" /></Link></section>
                ) : (
                    <section className="search-results" aria-label="Property search results">
                        {results.map((property) => <article className="result-card" key={property.id}><div className="result-image"><img src={property.image} alt={property.title} loading="lazy" /><span>{property.type}</span></div><div className="result-copy"><div><p className="result-location">{property.location}</p><h2>{property.title}</h2><p>{property.description}</p></div><div className="result-footer"><strong>{property.price}</strong><Link to="/view" aria-label={`View ${property.title}`}>View home <ArrowForwardIcon className="action-icon" aria-hidden="true" /></Link></div></div></article>)}
                    </section>
                )}
            </main>
            <Footer />
        </div>
    )
}

export default Search
