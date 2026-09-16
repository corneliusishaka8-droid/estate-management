import "./App.css"
import review from "./review.js"
import Get from "./get.jsx"

console.log(review)


function Test(){
    return(
        <div className="tests">
            <div className="e">
                <p>CLIENTS REWIEW</p>
                <h1>what our clients say</h1>
             <Get />


                {/* <div className="grid flex">
                    <div className="profile">
    
                    <img src={image} alt=""  />
                    <div>
                        <h2>{name}</h2>
                    <p>{role}</p>
                    </div>
                    </div>
                        <p className="stars">{rating}</p>
                    <p className="p"><span className="quotes">"</span>{review}<span className="quotes">"</span></p>
                    <p className="place"> {location}</p>
                </div> */}
            </div>
        </div>
    )
}


export default Test