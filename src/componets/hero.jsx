import "./App.css"
import heroimg from "../assets/PEBC1100 (2).PNG"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

function Hero (){
    const navigate = useNavigate()
    const [location, setLocation] = useState("")
    const [category, setCategory] = useState("")
    const [type, setType] = useState("")
    const [keyword, setKeyword] = useState("")

    const searchProperties = (event) => {
        event.preventDefault()
        const query = [location, category, type, keyword].filter(Boolean).join(" ")
        if (query) navigate(`/search?q=${encodeURIComponent(query)}`)
    }

    return(
        <div className="heroiv">

            <h1 className="lifewaa">discover the space that fits </h1>
        <p className="lifestyle">your lifestyle </p>
            <div className="img-div">
                <img src={heroimg} alt="house i" className="loadimg" loading="lazy" />
                <form className="search" onSubmit={searchProperties}>
                    <div><p className="text">location</p>
                    
                    <select name="location" id="1" value={location} onChange={(event) => setLocation(event.target.value)}>
                        <option value=""> select your country</option>
                        <option value="egypt">egypt</option>
                        <option value="ghana">ghana</option>
                        <option value="nigeria">nigeria</option>
                        <option value="united kingom">united kingom</option>
                        <option value="united states">united states</option>
                        <option value="zambia">zambia</option>
                        </select>
                    </div>
                    <div><p className="text" htmlFor="property">property</p>
                    <select name="category" id="2" value={category} onChange={(event) => setCategory(event.target.value)}>
                        <option value=""> property type</option>
                    <option value="residential">residential properties</option>
                    <option value="land">land & development</option>
                    <option value="commercial">commercial properties</option>
                        </select>
                    </div>
                    <div><p  className="text"htmlFor="property type">property type</p>
                    <select name="type" id="3" value={type} onChange={(event) => setType(event.target.value)}>
                        <option value="">building type</option>
                        <option value="duplex">duplex</option>
                        <option value="multi-storey">multi-storey homes</option>
                        <option value="mansion">mansion</option>
                        <option value="bungalow">bungalow</option>
                        <option value="office">office space</option>
                        
                        </select>
                        

                    </div>
                    <input type="search" name="filter" id="home-search" className="search-olace" placeholder="search" value={keyword} onChange={(event) => setKeyword(event.target.value)}/>
                    <button className="search-submit" type="submit">find homes <ArrowForwardIcon className="action-icon" aria-hidden="true" /></button>
                </form>
                <div className="hero-detail">
                    <div className="jr-detail1">
                    <p><span>900+</span> <br /> Properties sold</p>
                </div>
                <div className="jr-detail2">
                    <p><span>$500M+</span> <br />Transactions closed</p>
                </div>
                <div className="jr-detail">
                    <p><span>99%</span> <br /> Customer Satisfaction</p>
                </div>
                </div>
         </div>
                
        </div>
    )
}

export default Hero 
