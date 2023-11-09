import {useParams} from "react-router-dom";
import { useEffect,useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurantinfo from "../utils/useRestaurantMenu";
import { addItem } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";

 


const RestaurantMenu = () => {
    //hot to read a dynamic url params
    const {resId} = useParams();
    

    //const [restaurantinfo,setRestaurantinfo] = useState(null);


    const restaurantinfo = useRestaurantinfo(resId);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item))
    }
     

    //=>instead of narrwog down your api path upfront in the state variable , you can deconstruct it like this according to your current need 
    //=>and it is a best practice to deconstruct things like this ,By adding these null/undefined checks, you prevent the TypeError by ensuring 
    //...that you're attempting to destructure properties from a defined object, not from undefined. This guards against the situation where any part of the nested object might be undefined.


     const restaurantInfo = restaurantinfo?.data?.cards[0]?.card?.card?.info;
     const { name, areaName, costForTwoMessage, avgRating, cloudinaryImageId } = restaurantInfo || {};

     const menuInfo = restaurantinfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
     const { itemCards } = menuInfo || {};

    return!restaurantInfo ? (
        <Shimmer />
    ) : (   
        <>
        <div className="menu-items flex">     
            <div className="menu">
                <h1>Restuarant id:{resId}</h1> 
                <h2>{name}</h2>
                <img src={IMG_CDN_URL + cloudinaryImageId}/>
                <h3>{areaName}</h3>
                <h3>{avgRating}</h3>
                <h3>{costForTwoMessage}</h3>
            </div>

            <div>

            </div>

            <div className="dishes p-5 ">
                <h1>dishes</h1>
                <ul>
                {itemCards.map((item) => (
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - 
                        <button 
                            className="p-1 bg-green-100" 
                            onClick={()=>addFoodItem(item)}
                        >
                        add</button>
                        
                        {/* {item?.card?.info?.price}  */}
                    </li>
                    ))}


                </ul>
            </div>
        </div>

        </> 
   
    );
 };

 export default RestaurantMenu;

