
import RestaurantCard from "./RestaurantCard.js";
import {cards} from "../config.js";
import {useState} from "react";

function filterData(searchText,restaurants){
  const filterData = restaurants.filter((restaurant) =>
   restaurant.card.card.info.name.includes(searchText));
return filterData;
}
const Body = () =>{
    const [restaurants,setRestaurants] = useState(cards); 
    const [searchText, setSearchText] = useState("");
   
    return(
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
            const data = filterData(searchText,restaurants);
            setRestaurants(data);
          }}
          >
          search</button>
      </div>

      <div className="Restaurant-List">
        {cards.map((restaurant) => {
            return <RestaurantCard {...restaurant.card.card.info} key={restaurant.card.card.info.id}/>;
  
          })
        }
    
      </div>
      </>
    );
  };

  export default Body;