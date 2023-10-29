import { useState } from "react";
import { useEffect } from "react";

const useRestaurantinfo = (resId) => {

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

     return restaurantinfo;
}

export default useRestaurantinfo;