import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="h-96 flex justify-center items-center bg-gray-100  ">
            <div className="container  mx-auto px-4">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className=" bg-gray-800 text-white text-center py-4">
                        <h1 className="text-3xl font-bold">About Us</h1>
                    </div>
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-4">Welcome to Swiggy!</h2>
                        <p className="text-gray-700 mb-4">
                            At Swiggy, we are passionate about bringing the best food experiences right to your doorstep. 
                            Whether you're craving a hearty meal, a quick snack, or a delectable dessert, we've got you covered. 
                            Our mission is to provide top-notch food delivery service with a wide variety of options to suit every taste.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Our team is dedicated to ensuring that every order is prepared with the highest quality ingredients and delivered 
                            with care. We partner with local restaurants to bring you the freshest and most delicious meals, all from the comfort 
                            of your home.
                        </p>
                        <div className="text-center mt-6">
                            <Link to="/" className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:opacity-50 transition">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
