import {useState} from "react";
import Logo from "../assets/img/pollos.jpg" ;
import {Link} from "react-router-dom";

 

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



    return (
        <div className="flex justify-between bg-orange-300 shadow-xl">
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
                    <Link to="/">Cart</Link>
                    </li>

                    <li className="px-2">
                    <Link to="/instamart">Instamart</Link>
                    </li>
                </ul>
            </div>
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
        </div>
                 
    );
};

export default Header;
