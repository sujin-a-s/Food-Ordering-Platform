import {useParams} from "react-router-dom";
import { useEffect,useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import { MENU_ITEMS_API } from "../config";
 


const RestaurantMenu = () => {
    //hot to read a dynamic url params
    const {resId} = useParams();
    

    const [restaurantinfo,setRestaurantinfo] = useState(null);


    useEffect(() =>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        //const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.4171168&lng=77.8252923&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json)
        setRestaurantinfo(json);
     }
//
     
    //=>instead of narrwog down your api path upfront in the state variable , you can deconstruct it like this according to your current need 
    //=>and it is a best practice to deconstruct things like this ,By adding these null/undefined checks, you prevent the TypeError by ensuring 
    //...that you're attempting to destructure properties from a defined object, not from undefined. This guards against the situation where any part of the nested object might be undefined.
     const restaurantInfo = restaurantinfo?.data?.cards[0]?.card?.card?.info;
     const { name, areaName, costForTwoMessage, avgRating, cloudinaryImageId } = restaurantInfo || {};

     const menuInfo = restaurantinfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[8].card.card
     const { itemCards } = menuInfo || {};

    return!restaurantInfo ? (
        <Shimmer />
    ) : (   
        <>
        <div className="menu-items">     
            <div className="menu">
                <h1>Restuarant id:{resId}</h1> 
                <h2>{name}</h2>
                <img src={IMG_CDN_URL + cloudinaryImageId}/>
                <h3>{areaName}</h3>
                <h3>{avgRating}</h3>
                <h3>{costForTwoMessage}</h3>
            </div>

            <div className="dishes">
                <h1>dishes</h1>
                <ul>
                {itemCards.map((item) => (
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} 
                        
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

