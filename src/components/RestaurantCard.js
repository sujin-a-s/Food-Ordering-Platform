import { IMG_CDN_URL } from "../config.js";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
    const cuisinesString = cuisines.join(", ");
    const { user } = useContext(UserContext);

    return (
      
          <div className=" sm:w-[250px] md:w-[300px] p-4 m-2 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img 
                src={IMG_CDN_URL + cloudinaryImageId} 
                alt={name} 
                className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <div className="p-2">
                <h2 className="text-lg font-semibold mb-1">{name}</h2>
                <p className="text-gray-700 mb-2">Cuisines: {cuisinesString}</p>
                <h4 className="text-xl font-bold text-yellow-600">{avgRating} stars</h4>
                {/* <h5 className="font-bold">{user.name} - {user.email}</h5> */}
            </div>
        </div>
     

    );
};

export default RestaurantCard;
