import {useState} from "react";  

const isLoggedIn = () => {
    //API call to check the authentication
    return false;
};

const Title = () => (
    <a href="/">  
      <img 
          className="logo"
          alt="logo"
          src="https://tse3.mm.bing.net/th?id=OIP.lJ2OjMJTvyGkut3KwJjfLgHaHa&pid=Api&P=0&h=180"
      />
      </a>
      )

const Header = () =>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
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
