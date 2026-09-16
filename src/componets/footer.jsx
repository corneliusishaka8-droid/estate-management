import "./App.css"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

function Footer(){
    return(
            <div className="footer">
               <div className="second">
                 <h1>Find your <span className="dealll">ideal space</span></h1>
                <p>Continue to explore or reach out to us for any personal assistance</p>
                <div className="BTN-DIV"> <button className="btn2">avaliable propertics <ArrowForwardIcon className="action-icon" aria-hidden="true" /></button>
                    <button className="btn3">contact us <ArrowForwardIcon className="action-icon" aria-hidden="true" /></button></div>
               </div>
               <div className="holder">
                <h2>Coco's home</h2>
                <div>
                     
                    <ul>
                        <li>About Us</li>
                        <li>Featured Listings</li>
                        <li>propertics</li>
                        <li>Agents</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Legal</li>
                        <li>Privacy & Cookies Policies</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Get In Touch</li>
                        <li>0801-3056-233</li>
                        <li>info@coco'shome.ng</li>
                    </ul>
                </div>
                <div>
                     
                    <ul>
                        <li>Developer </li>
                        <li>coco & team</li>
                        
                    </ul>
                </div>
               </div>
           </div>
        
    )
}

export default Footer