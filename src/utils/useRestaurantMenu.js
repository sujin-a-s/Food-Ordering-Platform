import { useState } from "react";
import { useEffect } from "react";
import { FETCH_MENU_URL_1 } from "../config";
import { FETCH_MENU_URL_2 } from "../config";

const useRestaurantinfo = (resId) => {

    const [restaurantinfo,setRestaurantinfo] = useState(null);
    
    useEffect(() =>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.4171168&lng=77.8252923&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const data = await fetch(FETCH_MENU_URL_1+resId+FETCH_MENU_URL_2);
        const json = await data.json();
        console.log("resturant info int eh hook",json)
        setRestaurantinfo(json);
     }

     return restaurantinfo;
}

export default useRestaurantinfo;