
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
import {lazy,Suspense,useState} from "react"
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext.js";

const Instamart = lazy(() => import("./components/Instamart.js"));


const AppLayout = ()=>{

  const [user,setUser] = useState({
    name: "sujin",
    email: "sujin@gamil.com"
  });

  return(
    <>
      <UserContext.Provider
        value={{
          user : user,
          setUser : setUser,
        }}
      >
      <Header/>
      <Outlet/>
      <Footer/>
      </UserContext.Provider>
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
      },
      {
        path:"/instamart",
        element:(
          <Suspense fallback={<Shimmer/>}>
            <Instamart/>
          </Suspense>      
        )
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


