import RestaurantCard from "./RestaurantCard.js";
import {restaurantList} from "../config.js";
import {useEffect, useState} from "react";
import Shimmer from  "./Shimmer";
import {Link} from "react-router-dom";
import { filterData } from "../utils/Helper.js";
import useBody from "../utils/useBody.js";
import useOnline from "../utils/useonilne.js"

const Body = () =>{

    
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]); 
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        //   //API call
          getRestaurants();
        },[])
    
        async function getRestaurants(){
          //koramangala api
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          //tgode api
          //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.3678791&lng=77.9293239&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const json = await data.json();
          console.log(json);
          setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          //console.log(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          //console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name)
              // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.664325&lng=78.1460142&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
              // const json = await data.json();
              // //console.log(json )
              // setAllRestaurants( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
              // setFilteredRestaurants( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
        }

        const isOnline = useOnline();

        if (!isOnline){
          return <h1> Offline , please check your internet connection </h1>
        }


    //comdidtional rerendering
    //if restaurant is emoty => shimmer UI
    //if restaurant has data => actual data UI
    //not render component (Early component)

    
    if (!allRestaurants) return null;

    // if (filteredRestaurants?.length===0)
    //   return <h1> no Restaurant match your Filter!!</h1>;

    return allRestaurants?.length === 0 ? (
      <Shimmer/> 
    ) : (
      <>
      <div className="search-container">
        <input 
            type="text" 
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e)=>{
                // e.target.value => whatever you write in the box
                setSearchText(e.target.value);
            }}
        />
        <button
          className="search-btn"
          onClick={()=>{
            const data = filterData(searchText,allRestaurants);
            setFilteredRestaurants(data);
          }}
          >
          search</button>
      </div>

      <div className="Restaurant-List">
        {filteredRestaurants.map((restaurant) => {
            return(
            <Link 
              to={"/restaurant/"+ restaurant.info}
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