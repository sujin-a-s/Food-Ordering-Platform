import {useState,useContext} from "react";
import Logo from "../assets/img/swiggy.png" ;
import {Link} from "react-router-dom";
import useOnline from "../utils/useonilne";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

const Title = () => (
    <a href="/">  
      <img 
          data-testid="logo"
          id=""
          className="h-12 px-2 pl-2 my-2"
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
    console.log(cartItems)
     
    return (
        <div className="flex items-center justify-between bg-gray-800 text-white shadow-md p-3">
            <Title />
            <nav className="flex flex-grow -ml-20 justify-center">
                <ul className="flex space-x-4 items-center">
                    <li>
                        <Link className="hover:text-yellow-300" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="hover:text-yellow-300" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="hover:text-yellow-300" to="/instamart">Instamart</Link>
                    </li>
                    <li>
                        <Link className="hover:text-yellow-300" to="/cart">Cart ({cartItems.length})</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center space-x-4">
                {/* Avatar Icon */}
                <FaUserCircle className="text-2xl h-10 w-8 cursor-pointer hover:text-yellow-300" />
            </div>
        </div>
    );
    
};

export default Header;




