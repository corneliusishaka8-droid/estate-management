import "./App.css"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import hux1 from "../assets/KGJS0041.PNG"
import hux2 from "../assets/PEBC1100 (2).PNG"
import hux3 from "../assets/VNZFE5658.JPG"
import hux4 from "../assets/dup1.PNG"

function  Explore(){
     return( 
        <div className="explore-section">
            <h2>explore popular <span> choices around you</span> </h2>
            <p>step into a world of redefining living with modern homes, elegant apartments, serene cottages, all tailoredd for comfort and style. </p>
               <h3><a href="/prop">explore more <ArrowForwardIcon className="action-icon" aria-hidden="true" /></a></h3>
            <div className="image-holder">
                <div className="display">
                    <img src={hux1} alt="explore houses picture" loading="lazy" />
                    <p>Abuja Nigeria</p>
                    <p>Duplex </p>
                </div>
                <div className="display">
                    <img src={hux2} alt="explore houses picture" loading="lazy" />
                    <p>Cairo Egypt</p>
                    <p>Duplex</p>
                </div>
                <div className="display">
                    <img src={hux3} alt="explore houses picture" loading="lazy" />
                    <p>USA America</p>
                    <p>Farm House</p>
                </div>
                <div className="display">
                    <img src={hux4} alt="explore houses picture" loading="lazy" />
                    <p>Rabat Morocco</p>
                    <p></p>
                </div>
            </div>
            <h4>
                <span className="span0">your</span> <span className="span1">comfort</span>  <span className="span2">our</span> <span className="span3   ">desire</span>
            </h4>
            <h5><a href="/about">learn more <ArrowForwardIcon className="action-icon" aria-hidden="true" /></a></h5>
        </div>
     )
}

export default Explore