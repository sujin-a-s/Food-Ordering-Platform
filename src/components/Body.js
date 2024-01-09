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
          setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          //console.log(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
      <div className="my-0.5  bg-orange-100">
        <input 
            data-testid="search-input"
            type="text" 
            className=" shadow-md search-input p-2 focus:bg-slate-200"
            placeholder="Search"
            value={searchText}
            onChange={(e)=>{
                // e.target.value => whatever you write in the box
                setSearchText(e.target.value);
            }}
        />
        <button
          data-testid="search-btn"
          className="p-2 m-2 bg-orange-500 text-white  hover:bg-neutral-600"
          onClick={()=>{
            const data = filterData(searchText,allRestaurants);
            setFilteredRestaurants(data);
          }}
          >
          search</button>
          {/* <input value={user.name} onChange={
            e => setUser({
              name : e.target.value,
              email : "newemail@gmail.com"
            })
          }></input> */}
      </div>

      <div className="flex flex-wrap ml-8 mt-6" data-testid="res-list">
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