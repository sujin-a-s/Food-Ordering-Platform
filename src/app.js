
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import ProfileClass from "./components/ProfileClass.js";
import ProfileFunctional from "./components/ProfileFunctional.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestuarantMenu.js";
import {  RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";

const AppLayout = ()=>{
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement:<Error />,
    children:[
      {
        path:"/about",
        element:<About/>,
        children:[
        {
          path:"profile",
          element:<ProfileClass/>
        }
        ]
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      }

    ]
  }

]
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);





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


