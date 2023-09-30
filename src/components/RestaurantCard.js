import {IMG_CDN_URL} from "../config.js"

const RestaurantCard = ({name,cuisines,cloudinaryImageId,avgRating})=>{
    //console.log(cards[0].card.card.info.name);
    return(
      <div className="card">
        <img src={IMG_CDN_URL+cloudinaryImageId}/>
        <h2>{name}</h2>
        <h3>{cuisines }</h3>
        <h4>{avgRating} stars</h4>
      </div>
    );
  }

  export default RestaurantCard;