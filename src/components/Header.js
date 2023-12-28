import {useState,useContext} from "react";
import Logo from "../assets/img/swiggy.png" ;
import {Link} from "react-router-dom";
import useOnline from "../utils/useonilne";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
    <a href="/">  
      <img 
          data-testid="logo"
          id=""
          className="h-20 px-2 pl-2 my-2"
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
        <div className="flex justify-between  text-black shadow-xl">
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

                    <li className="px-2" data-testid="cart">
                    <Link to="/cart">Cart- {cartItems.length} items</Link>
                    </li>
                </ul>
            </div>
            <h1 className="py-10" data-testid="online-status">{isOnline ? "🟢" : "❌"}</h1>
            {/* <span className="p-10 font-bold">{user.name}</span> */}
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
        </div>
                 
    );
};

export default Header;




