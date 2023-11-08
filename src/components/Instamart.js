import { useState } from "react";

 const Section= ({title,description,isVisible,setIsVisible}) => { 

    // const [isVisible,setIsVisible] = useState(false);

    return(
        <div className="border border-black m-1 p-2 py-1">
            <h2 className="font-bold">{title}</h2>
            {isVisible ? (
                <button
                    onClick={()=>setIsVisible(false)} 
                    className="cursor-pointer underline"
                >
                 Hide
                </button>
            ) : (
                <button
                    onClick={()=>setIsVisible(true)}
                    className="cursor-pointer underline"
                >
                Show
                </button>
            )}

            {isVisible && <p>{description}</p>} 
        </div>
    );
 }
 
 const Instamart = () => {
    const [visibleSection,setVisibleSection] = useState("about");
    return(
        <div>
            <>
             <h1 className="font-bold">Instamart</h1>
             <Section 
                title={"About Instamart"} 
                description={
                    "The placeholder text, beginning with the line Lorem ipsum dolor sit amet, consectetur adipiscing elit, looks like Latin because in its youth, centuries ago, it was Latin"
                }
                isVisible={visibleSection==="about"}
                setIsVisible={()=>
                    setVisibleSection("about")
                }
             /> 
             
             <Section 
                 title={"Team Instamart"} 
                description={
                    "The placeholder text, beginning with the line Lorem ipsum dolor sit amet, consectetur adipiscing elit, looks like Latin because in its youth, centuries ago, it was Latin"
                }   
                isVisible={visibleSection==="team"}
                setIsVisible={()=>
                    setVisibleSection("team")
                }
             /> 
             
             <Section 
                title={"Career Instamart"} 
                description={
                    "The placeholder text, beginning with the line Lorem ipsum dolor sit amet, consectetur adipiscing elit, looks like Latin because in its youth, centuries ago, it was Latin"
                }
                isVisible={visibleSection==="career"}
                setIsVisible={()=>
                    setVisibleSection("career")}
             />
             </>
        </div>
        );
 }

 export default Instamart;
 