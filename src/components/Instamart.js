import { useState } from "react";
 const Section= ({title,description}) => { 

    const [isVisible,setIsVisible] = useState(false);

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
    return(
        <div>
            <>
             <h1 className="font-bold">Instamart</h1>
             <Section title={"About Instamart"} description="The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
                Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero."/> 
             <Section title={"Team Instamart"} description="The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
                Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero."/> 
             <Section title={"Customer Instamart"} description="The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
                Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero."/>
             </>
        </div>
        );
 }

 export default Instamart;
