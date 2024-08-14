import RestaurantCard from "./RestaurantCard.js";
import {restaurantList} from "../config.js";
import {useEffect, useState, useContext} from "react";
import Shimmer from  "./Shimmer";
import {Link} from "react-router-dom";
import { filterData } from "../utils/Helper.js";
import useBody from "../utils/useBody.js";
import useOnline from "../utils/useonilne.js"
import UserContext from "../utils/UserContext.js";

const Body = () =>{

    
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]); 
    const [searchText, setSearchText] = useState("");
    const {user,setUser} = useContext(UserContext);

    useEffect(()=>{
          getRestaurants();
        },[])
    
        async function getRestaurants(){
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const json = await data.json();
          console.log("details of all the res",json);
          setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        }

        const isOnline = useOnline();

        if (!isOnline){
          return <h1> Offline , please check your internet connection </h1>
        }
    
    if (!allRestaurants) return null;


    return allRestaurants?.length === 0 ? (
      <Shimmer/> 
    ) : (
      <>
      <div className="my-2 gap-0 flex items-center justify-center">
        <input 
            data-testid="search-input"
            type="text" 
            className=" shadow-md search-input p-2 focus:bg-slate-200  rounded-l-lg"
            placeholder="Search"
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}
        />
        <button
          data-testid="search-btn"
          className="p-2  bg-orange-500 shadow-md text-white  hover:bg-neutral-600 rounded-r-lg"
          onClick={()=>{
            const data = filterData(searchText,allRestaurants);
            setFilteredRestaurants(data);
          }}
          >
          search</button>

      </div>

      <div className="flex flex-wrap ml-36 mt-6 " data-testid="res-list">
        {filteredRestaurants.map((restaurant) => {
            return(
            <Link 
              to={"/restaurant/"+ restaurant?.info?.id}
              key={restaurant.data}>
              <RestaurantCard {...restaurant.info} key={restaurant.info.id}/> 
            </Link>
            );
  
          })
        }
    
      </div>
      </>
     );
  };

  export default Body;