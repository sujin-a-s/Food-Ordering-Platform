import { useSelector } from "react-redux/es/hooks/useSelector";
import FoodItem from "./FoodItem";
const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    return (
        <div className="flex flex-wrap">
            {cartItems.map((item)=>(
                <FoodItem key={item.card.info.id} {...item.card.info}/>
            ))}             
        </div>
    );
}

export default Cart;