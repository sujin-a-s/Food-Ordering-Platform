
import RestaurantCard from "./RestaurantCard.js";
import {cards} from "../config.js";
import {useEffect, useState} from "react";
import Shimmer from  "./Shimmer";

function filterData(searchText,restaurants){
  const filterData = restaurants.filter((restaurant) =>
   restaurant?.card?.card?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
return filterData;
}

const Body = () =>{
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState(cards); 
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
      //API call
      getRestaurants();
    },[])

    async function getRestaurants(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.3678791&lng=77.9293239&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setAllRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      //console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name)
    }
    //comdidtional rerendering
    //if restaurant is emoty => shimmer UI
    //if restaurant has data => actual data UI

    //not render component (Early component)

    if (!allRestaurants) return null;

    if (filteredRestaurants?.length===0)
      return <h1> no Restaurant match your Filter!!</h1>;

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
            const data = filterData(searchText,allestaurants);
            setFilteredRestaurants(data);
          }}
          >
          search</button>
      </div>

      <div className="Restaurant-List">
        {filteredRestaurants.map((restaurant) => {
            return <RestaurantCard {...restaurant.card.card.info} key={restaurant.card.card.info.id}/>;
  
          })
        }
    
      </div>
      </>
    );
  };

  export default Body;