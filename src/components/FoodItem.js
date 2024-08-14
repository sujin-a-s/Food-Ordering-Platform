import { IMG_CDN_URL } from "../config.js";

const FoodItem = ({ name, description, imageId, price }) => {
    return (
        <div className="w-full sm:w-[250px] md:w-[300px] p-4 m-2 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img 
                src={IMG_CDN_URL + imageId} 
                alt={name} 
                className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <div className="p-2">
                <h2 className="text-lg font-semibold mb-1">{name}</h2>
                <p className="text-gray-700 mb-2">{description}</p>
                <h4 className="text-xl font-bold text-green-600">₹{(price / 100).toFixed(2)}</h4>
            </div>
        </div>
    );
};

export default FoodItem;
