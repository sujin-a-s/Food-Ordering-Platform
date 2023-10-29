import { useEffect, useState } from "react";



const ProfileFunctional = (props)=>{
    const [count,setCount] = useState(0)

    useEffect(() => {
        // API Call
        const timer = setInterval(() => {
          console.log("NAMASTE REACT OP ");
        }, 1000);
        console.log("useEffect");
    
        return () => {
          clearInterval(timer);
          console.log("useEffect Return");
        };
      }, []);
      console.log("render");

    return(
        <div>
            <h2>Profile Component</h2>
            <h3>Name:{props.name}</h3>
            <h3>count: {count}</h3>
            <button
                onClick={() => {
                    setCount(1);
                }}>
                    Count
            </button>
         </div>
    )
  }
  
  export default ProfileFunctional;