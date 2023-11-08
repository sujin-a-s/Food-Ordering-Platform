import {IMG_CDN_URL} from "../config.js"
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";
const RestaurantCard = ({name,cuisines,cloudinaryImageId,avgRating})=>{
  const cuisinesString = cuisines.join(", ");
 

    //console.log(cards[0].card.card.info.name);
    const {user} = useContext(UserContext)
    return(
      <div className="w-[200px] p-2 m-2 shadow-md bg-orange-100 h-auto">
        <img src={IMG_CDN_URL+cloudinaryImageId }className="h-40 w-full h-40 object-cover mb-4"/>
        <h2 className="font-bold text-xl">{name}</h2>
        <br></br>
        <h4>Cuisines: {cuisinesString}</h4>
        <h4>{avgRating} stars</h4>
        <h5 className="font-bold">{user.name} - {user.email}</h5>
      </div>
    );
  }

  export default RestaurantCard;