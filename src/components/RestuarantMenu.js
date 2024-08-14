import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurantinfo from "../utils/useRestaurantMenu";
import { addItem } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  // Read dynamic URL params
  const { resId } = useParams();

  // Fetch restaurant info using custom hook
  const restaurantInfo = useRestaurantinfo(resId);
  console.log(restaurantInfo);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  // Extract necessary data with proper null checks
  const restaurantDetails =
    restaurantInfo?.data?.cards[2]?.card?.card?.info || {};
  const { name, areaName, costForTwoMessage, avgRating, cloudinaryImageId } =
    restaurantDetails;

  const menuInfo =
    restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards || [];

  return !restaurantDetails.name ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        <div className=" flex items-center justify-center ">
          <img
            src={IMG_CDN_URL + cloudinaryImageId}
            alt={name}
            className="w-full h-60 object-cover rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{name}</h1>
          <p className="text-lg text-gray-600 mb-1">{areaName}</p>
          <p className="text-lg text-gray-600 mb-2">{avgRating} ⭐</p>
          <p className="text-lg font-semibold">{costForTwoMessage}</p>
        </div>
      </div>

      {menuInfo.length == 0 ? (
        <>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            No Menus for this website !
          </div>
        </>
      ) : (
        <>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Menu</h2>
            <ul className="space-y-4">
              {menuInfo.map((item) => (
                <li
                  key={item?.card?.info?.id}
                  className="flex justify-between items-center p-4 border-b border-gray-200"
                >
                  <span className="text-lg">{item?.card?.info?.name}</span>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                    onClick={() => addFoodItem(item)}
                  >
                    Add
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantMenu;
