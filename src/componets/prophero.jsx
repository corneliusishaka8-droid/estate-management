import Bits from "../componets/bits"
import pic1 from "../assets/bug1.PNG"
import pic2 from "../assets/bug2.PNG"
import pic3 from "../assets/bug3.PNG"
import pic4 from "../assets/bug4.PNG"
import pic5 from "../assets/bug5.PNG"
import pic6 from "../assets/dup1.PNG"
import pic7 from "../assets/dup2.PNG"
import pic8 from "../assets/dup3.PNG"
import pic9 from "../assets/dup4.PNG"
import pic10 from "../assets/dup5.PNG"
import pic11 from  "../assets/man.PNG"
import pic12 from  "../assets/man1.PNG"
import pic13 from  "../assets/man2.PNG"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import SearchIcon from "@mui/icons-material/Search"

const bungalowHomes = [
       { image: pic1, label: 'Maple Court Bungalow', alt: 'Single-storey bungalow with landscaped garden', link: '#' },
       { image: pic2, label: 'Palm Grove Bungalow', alt: 'Contemporary bungalow with a covered entrance', link: '#' },
       { image: pic3, label: 'Olive Lane Bungalow', alt: 'Bright bungalow with a wide front lawn', link: '#' },
       { image: pic4, label: 'Sunrise Court Bungalow', alt: 'Modern bungalow with warm exterior lighting', link: '#' },
       { image: pic5, label: 'The Garden Bungalow', alt: 'Family bungalow with a neat front garden', link: '#' }
];

const duplexHomes = [
       { image: pic6, label: 'Cedar Park Duplex', alt: 'Modern two-storey duplex with a balcony', link: '#' },
       { image: pic7, label: 'The Glass House', alt: 'Contemporary duplex with floor-to-ceiling windows', link: '#' },
       { image: pic8, label: 'Palm Vista Duplex', alt: 'Luxury duplex with a swimming pool', link: '#' },
       { image: pic9, label: 'Riverside Duplex', alt: 'Modern duplex with landscaped driveway', link: '#' },
       { image: pic10, label: 'Lagos View Duplex', alt: 'Two-storey family duplex at dusk', link: '#' }
];

const mansionHomes = [
       { image: pic11, label: 'The Grand Palm Estate', alt: 'Large luxury mansion with a landscaped entrance', link: '#' },
       { image: pic12, label: 'Crownstone Mansion', alt: 'Executive mansion with a broad driveway', link: '#' },
       { image: pic13, label: 'Poolside Residence', alt: 'Luxury mansion with an outdoor swimming pool', link: '#' },
       { image: pic9, label: 'The Courtyard House', alt: 'Contemporary luxury home with a courtyard', link: '#' },
       { image: pic10, label: 'Sunset Manor', alt: 'Large modern residence in the evening light', link: '#' }
];

const multiStoreyHomes = [
       { image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85', label: 'The Atrium House', alt: 'Multi-storey home with a bright open interior', link: '#' },
       { image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85', label: 'Parkside Residence', alt: 'Elegant multi-storey residence beside greenery', link: '#' },
       { image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85', label: 'The Terrace House', alt: 'Modern house with a spacious terrace', link: '#' },
       { image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85', label: 'Canopy Heights', alt: 'Contemporary multi-level home with warm interiors', link: '#' },
       { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85', label: 'Northview House', alt: 'Modern multi-storey home with a landscaped yard', link: '#' }
];

const officeSpaces = [
       { image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85', label: 'The Workroom', alt: 'Open-plan office with desks and natural light', link: '#' },
       { image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85', label: 'Harbour Point Offices', alt: 'Refined office lounge with a city view', link: '#' },
       { image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85', label: 'Studio 12', alt: 'Creative studio office with shared worktables', link: '#' },
       { image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=85', label: 'The Collective', alt: 'Bright collaborative office space', link: '#' },
       { image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85', label: 'Victoria Workspace', alt: 'Modern private office with meeting area', link: '#' }
];

const landedProperties = [
       { image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85', label: 'Palm-lined Corner Plot', alt: 'Green undeveloped land under a wide sky', link: '#' },
       { image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85', label: 'Ibeju-Lekki Growth Plot', alt: 'Open land with trees and a distant horizon', link: '#' },
       { image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=85', label: 'Garden District Parcel', alt: 'Lush green acreage suitable for development', link: '#' },
       { image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85', label: 'Quiet Grove Land', alt: 'Wooded land with a clear open path', link: '#' },
       { image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85', label: 'Greenfield Reserve', alt: 'Tropical green plot with development potential', link: '#' }
];

function PropHero(){
       const navigate = useNavigate()
       const [keyword, setKeyword] = useState("")

       const searchProperties = (event) => {
              event.preventDefault()
              if (keyword.trim()) navigate(`/search?q=${encodeURIComponent(keyword.trim())}`)
       }

       return  (
        <div className="heroprop">
              <form className="search--spet" onSubmit={searchProperties}><input type="search" className="search--woo" name="search" id="property-search" placeholder="Search homes, offices, land..." value={keyword} onChange={(event) => setKeyword(event.target.value)}/><button className="property-search-submit" type="submit"><SearchIcon className="action-icon" aria-hidden="true" /> search <ArrowForwardIcon className="action-icon" aria-hidden="true" /></button></form>
           <div className="heroprop1">
            <h1>Bungalows</h1>
            <div className="place">
                   <Bits items={bungalowHomes} defaultIndex={2} expandRatio={0.52} trigger="hover" accentColor="#ffffff" overlayColor="#060010" textColor="#ffffff" grayscale showLabels duration={0.6} ease="power3.out" parallax={0.5} tilt={8} stagger={0.06} height={460} gap={10} radius={16} orientation="horizontal"/>
         
            </div>
           </div>
          <div className="heroprop1"> 
            <h1>Duplex homes</h1>
            <div className="place">
                   <Bits items={duplexHomes} defaultIndex={2} expandRatio={0.52} trigger="hover" accentColor="#ffffff" overlayColor="#060010" textColor="#ffffff" grayscale showLabels duration={0.6} ease="power3.out" parallax={0.5} tilt={8} stagger={0.06} height={460} gap={10} radius={16} orientation="horizontal"/>
         
            </div>
           </div>
           <div className="heroprop1">
            <h1>Mansion</h1>
            <div className="place">
                   <Bits items={mansionHomes} defaultIndex={2} expandRatio={0.52} trigger="hover" accentColor="#ffffff" overlayColor="#060010" textColor="#ffffff" grayscale showLabels duration={0.6} ease="power3.out" parallax={0.5} tilt={8} stagger={0.06} height={460} gap={10} radius={16} orientation="horizontal"/>
         
            </div>
           </div>
           <div className="heroprop1">
            <h1>Multi-storey homes</h1>
        <div className="place">
                   <Bits items={multiStoreyHomes} defaultIndex={2} expandRatio={0.52} trigger="hover" accentColor="#ffffff" overlayColor="#060010" textColor="#ffffff" grayscale showLabels duration={0.6} ease="power3.out" parallax={0.5} tilt={8} stagger={0.06} height={460} gap={10} radius={16} orientation="horizontal"/>
         
            </div>   
            </div>
                 <div className="heroprop1">
            <h1>Office spaces</h1>
        <div className="place">
                   <Bits items={officeSpaces} defaultIndex={2} expandRatio={0.52} trigger="hover" accentColor="#ffffff" overlayColor="#060010" textColor="#ffffff" grayscale showLabels duration={0.6} ease="power3.out" parallax={0.5} tilt={8} stagger={0.06} height={460} gap={10} radius={16} orientation="horizontal"/>
         
            </div>  
             </div>
                  <div className="heroprop1 thelast">
            <h1>Landed properties</h1>
        <div className="place">
                   <Bits items={landedProperties} defaultIndex={2} expandRatio={0.52} trigger="hover" accentColor="#ffffff" overlayColor="#060010" textColor="#ffffff" grayscale showLabels duration={0.6} ease="power3.out" parallax={0.5} tilt={8} stagger={0.06} height={460} gap={10} radius={16} orientation="horizontal"/>
         
            </div>   
            
            </div>
            <div className="follow">
              <a href="/view"> <h1>view more <ArrowForwardIcon className="action-icon" aria-hidden="true" /></h1></a>
            </div>
        </div>
       )
}

export default PropHero