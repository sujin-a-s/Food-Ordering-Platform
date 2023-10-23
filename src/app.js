
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";


const AppLayout = ()=>{
  return(
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  );
};


const root = document.getElementById("root");

const app = ReactDOM.createRoot(root);
app.render(<AppLayout/>);





// //named import

//     /**
//      * Header
//      *    - Logo
//      *    - Nav Items(Right Items)
//      *    - Cart
//      * Body
//      *    - Search bar
//      *    - RestaurantList
//      *         -RestuarantCard
//      *              - Image
//      *              - Name
//      *              - Rating
//      *              - cusines
//      * Footer
//      * - Links
//      * - Copyright
//      * 
//      */


