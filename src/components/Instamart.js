import { useState } from "react";

 const Section= ({title,description,isVisible,setIsVisible}) => { 

    // const [isVisible,setIsVisible] = useState(false);

    return(
        <div className="border border-black m-2 p-2 ">
            <h3 className="font-bold text-xl">{title}</h3>
            {
                isVisible ? (<button onClick={()=>setIsVisible(false)} className="cursor-pointer underline">Hide</button>
                ) : (<button onClick={()=>setIsVisible(true)} className="cursor-pointer underline">Show</button>
                )
            }

            {isVisible && <p>{description}</p>} 
        </div>
    );
 }
 
 const Instamart = () => {
    const [visibleSection,setVisibleSection] = useState("about");
    return(
        <div>
        <h1 className="text-4xl p-2 m-2 font-bold">InstaMart</h1>
        <Section title={"About InstaMart"} description ={"Instamart aims to deliver groceries in 15-30 minutes through a network of seller-owned dark stores that emerged from the learnings of Swiggy Stores, a hyperlocal delivery."} isVisible={visibleSection === "about"} setIsVisible={()=>setVisibleSection ("about")}/>
        <Section title={"Team InstaMart"} description ={"This is About the section of InstaMart the learnings of Swiggy Stores, a hyperlocal delivery marketplace for groceries and other essentials that shut last year"} isVisible={visibleSection === "team"} setIsVisible={()=>setVisibleSection ("team")}/>
        <Section title={"Careers"} description ={"This is About the section of InstaMart the learnings of Swiggy Stores, a hyperlocal delivery marketplace for groceries and other essentials that shut last year"}isVisible={visibleSection === "careers"} setIsVisible={()=>setVisibleSection ("careers")}/>
        <Section title={"product"} description ={"This is About the section of InstaMart the learnings of Swiggy Stores, a hyperlocal delivery marketplace for groceries and other essentials that shut last year"}isVisible={visibleSection === "product"} setIsVisible={()=>setVisibleSection ("product")}/>
        <Section title={"Detials"} description ={"This is About the section of InstaMart the learnings of Swiggy Stores, a hyperlocal delivery marketplace for groceries and other essentials that shut last year"}isVisible={visibleSection === "details"} setIsVisible={()=>setVisibleSection ("details")}/>

       {/* <AboutInstaMart/>
       <DetailsofInstaMart/>
       <TeamInstaMart/>
       <Product/>
       <Careers/> */}
    </div>
        );
 }

 export default Instamart;
 