import {IMG_CDN_URL} from "../config.js"

const RestaurantCard = ({name,cuisines,cloudinaryImageId,avgRating})=>{
    //console.log(cards[0].card.card.info.name);
    return(
      <div className="w-[200px] p-2 m-2 shadow-md bg-orange-100 ">
        <img src={IMG_CDN_URL+cloudinaryImageId}/>
        <h2 className="font-bold text-xl">{name}</h2>
        <h3 className="">{cuisines }</h3>
        <h4>{avgRating} stars</h4>
      </div>
    );
  }

  export default RestaurantCard;