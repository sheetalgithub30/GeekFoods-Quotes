
import './Card.css'
import quotes from "./Quotes";

function Card() {
  return(
  <div id="card" data-aos="fade-down">
  {quotes.map((obj,index)=>{
    return( 
   <div id="single-card">
    <h2 key={index}>{obj.quote}</h2>
    <h4>{obj.author}</h4>
  </div>

    );
  })}
  </div>);
}

export default Card;
