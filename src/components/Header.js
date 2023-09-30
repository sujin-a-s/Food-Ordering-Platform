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
    
    </div> 
);
};

export default Header;
