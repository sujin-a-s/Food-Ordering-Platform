// import { useState } from "react";
// import { useEffect } from "react";

// const useBody = () => {
//     const [allRestaurants,setAllRestaurants] = useState([]);
//     const [filteredRestaurants,setFilteredRestaurants] = useState([]); 

//     useEffect(()=>{
//         //   //API call
//           getRestaurants();
//         },[])
    
//         async function getRestaurants(){
//           //koramangala api
//           const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//           //tgode api
//           //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.3678791&lng=77.9293239&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//           const json = await data.json();
//           console.log(json);
//           setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//           //console.log(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//           setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//           //console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name)
//               // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.664325&lng=78.1460142&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//               // const json = await data.json();
//               // //console.log(json )
//               // setAllRestaurants( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
//               // setFilteredRestaurants( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
//         }
//         return allRestaurants,filteredRestaurants;
// }

// export default useBody;