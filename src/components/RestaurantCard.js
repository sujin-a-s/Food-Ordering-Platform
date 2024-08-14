import { IMG_CDN_URL } from "../config.js";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
    const cuisinesString = cuisines.join(", ");
    const { user } = useContext(UserContext);

    return (
        <div className=" sm:w-[250px] md:w-[300px] p-4 m-2 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col h-[400px]">
            <img 
                src={IMG_CDN_URL + cloudinaryImageId} 
                alt={name} 
                className=" h-48 object-cover rounded-t-lg mb-4"
            />
            <div className="flex-1 p-2 flex flex-col justify-between">
                <div>
                    <h2 className="text-lg font-semibold mb-1 truncate">{name}</h2>
                    <p className="text-gray-700 mb-2 text-sm line-clamp-2">{cuisinesString}</p>
                </div>
                <h4 className="text-xl font-bold text-yellow-600 mt-auto">{avgRating} stars</h4>
            </div>
        </div>
    );
};

export default RestaurantCard;