import reviews from "./review"
import "./App.css"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
console.log(reviews)

function Get(){
   return(
    <div className="grid">
        {reviews.map((review) => (
           <div className="profile">
         <div className="header " key={review.id}>
             
            <img src={review.image} alt="woman" width={"64px"} height={"64px"} style={{borderRadius:"32px"}}/>
             <div>
                 <p>{review.name}</p>     
            <p>{review.role}</p>
             </div>
         </div>
         <p className="stars">{review.rating}</p>
       <p className="p"><span className="quotes">"</span>{review.review}<span className="quotes">"</span></p>
       <p className="place"><LocationOnOutlinedIcon className="action-icon" aria-hidden="true" /> {review.location}</p>
           </div>
        ))}
    </div>
   )
}

export default Get