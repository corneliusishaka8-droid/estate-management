import opt from "../info/house"
import "./App.css"

function Option(){
    return (
     <div>
      {opt.map((name) => (

        <p>{name}</p>
      ))}
     </div>   
     
    )
         

    
}


export default  Option