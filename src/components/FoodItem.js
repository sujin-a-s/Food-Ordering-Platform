import {IMG_CDN_URL} from "../config.js"


const FoodItem = ({name,description,imageId,price})=>{
 
    //console.log(cards[0].card.card.info.name);

    return(
      <div className="w-[200px] p-2 m-2 shadow-md bg-violet-100 h-auto">
        <img src={IMG_CDN_URL+imageId }className="h-40 w-full h-40 object-cover mb-4"/>
        <h2 className="font-bold text-xl">{name}</h2>
        <br></br>
        <h4>{description}</h4>
        <h4>Rupees: {price/100}</h4>
      </div>
    );
  }
export default FoodItem;