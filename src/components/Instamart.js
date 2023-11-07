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
    const [sectionConfig,setSectionConfig] = useState({
        showAbout: true,
        showTeam: false,
        showCareer: false
    });
    return(
        <div>
            <>
             <h1 className="font-bold">Instamart</h1>
             <Section 
                title={"About Instamart"} 
                description={
                    "The placeholder text, beginning with the line Lorem ipsum dolor sit amet, consectetur adipiscing elit, looks like Latin because in its youth, centuries ago, it was Latin"
                }
                isVisible={sectionConfig.showAbout}
                setIsVisible={()=>
                    setSectionConfig({
                        showAbout: true,
                        showTeam: false,
                        showCareer: false
                    })}
             /> 
             
             <Section 
                title={"Team Instamart"} 
                description={
                    "The placeholder text, beginning with the line Lorem ipsum dolor sit amet, consectetur adipiscing elit, looks like Latin because in its youth, centuries ago, it was Latin"
                }   
                isVisible={sectionConfig.showTeam}
                setIsVisible={()=>
                    setSectionConfig({
                        showAbout: false,
                        showTeam: true,
                        showCareer: false
                    })}
             /> 
             
             <Section 
                title={"Career Instamart"} 
                description={
                    "The placeholder text, beginning with the line Lorem ipsum dolor sit amet, consectetur adipiscing elit, looks like Latin because in its youth, centuries ago, it was Latin"
                }
                isVisible={sectionConfig.showCareer}
                setIsVisible={()=>
                    setSectionConfig({
                        showAbout: false,
                        showTeam: false,
                        showCareer: true
                    })}
             />
             </>
        </div>
        );
 }

 export default Instamart;
 