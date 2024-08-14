import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 m-4 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
                <button
                    onClick={() => setIsVisible(!isVisible)}
                    className="ml-auto px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
                >
                    {isVisible ? "Hide" : "Show"}
                </button>
            </div>
            {isVisible && <p className="text-gray-700">{description}</p>}
        </div>
    );
};

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("about");

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">InstaMart</h1>
                    <p className="text-lg text-gray-600">Your one-stop shop for all your grocery needs delivered fast!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Section
                        title="About InstaMart"
                        description="Instamart aims to deliver groceries in 15-30 minutes through a network of seller-owned dark stores that emerged from the learnings of Swiggy Stores, a hyperlocal delivery."
                        isVisible={visibleSection === "about"}
                        setIsVisible={() => setVisibleSection("about")}
                    />
                    <Section
                        title="Team InstaMart"
                        description="Learn about our dedicated team working behind the scenes to make your grocery shopping effortless."
                        isVisible={visibleSection === "team"}
                        setIsVisible={() => setVisibleSection("team")}
                    />
                    <Section
                        title="Careers"
                        description="Explore exciting career opportunities with InstaMart and join our dynamic team."
                        isVisible={visibleSection === "careers"}
                        setIsVisible={() => setVisibleSection("careers")}
                    />
                    <Section
                        title="Product"
                        description="Discover the range of products available on InstaMart, from fresh produce to pantry essentials."
                        isVisible={visibleSection === "product"}
                        setIsVisible={() => setVisibleSection("product")}
                    />
                    <Section
                        title="Details"
                        description="Get all the important details about our services, policies, and more."
                        isVisible={visibleSection === "details"}
                        setIsVisible={() => setVisibleSection("details")}
                    />
                </div>
            </div>
        </div>
    );
};

export default Instamart;
