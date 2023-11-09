import {useState,useContext} from "react";
import Logo from "../assets/img/pollos.jpg" ;
import {Link} from "react-router-dom";
import useOnline from "../utils/useonilne";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
    <a href="/">  
      <img 
          className="h-28 px-2"
          alt="logo"
          src={Logo}
      />
      </a>
      )

const Header = () =>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const isOnline = useOnline();

    const {user} = useContext(UserContext)

    const cartItems = useSelector(store => store.cart.items)

     
    return (
        <div className="flex justify-between bg-purple-950 text-white shadow-xl">
            <Title/>
            <div className="nav-items">
                <ul className="flex py-10">                   
                    <li className="px-2">
                    <Link to="/">Home</Link>
                    </li>
                    
                    <li className="px-2">
                    <Link to="/about">About</Link>
                    </li>
                    
                    <li className="px-2">
                    <Link to="/contact">Contact</Link>
                    </li>

                    <li className="px-2">
                    <Link to="/instamart">Instamart</Link>
                    </li>

                    <li className="px-2">
                    <Link to="/">Cart- {cartItems.length} items</Link>
                    </li>
                </ul>
            </div>
            {/* <h1>{isOnline ? "✔️" : "❌"}</h1> */}
            <span className="p-10 font-bold">{user.name}</span>
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
        </div>
                 
    );
};

export default Header;
