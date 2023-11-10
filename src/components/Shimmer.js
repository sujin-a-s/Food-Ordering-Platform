const Shimmer = () => {
    return (
    <div data-testid="shimmer" className="restaurant-list">
        {Array(10)
          .fill("")
          .map((e,index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
    </div>
    );
};
export default Shimmer;








// import ProfileClass from "./ProfileClass.js"; 
// import ProfileFunctional from './ProfileFunctional.js';