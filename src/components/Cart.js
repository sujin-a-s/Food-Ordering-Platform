import { useSelector } from "react-redux/es/hooks/useSelector";
import FoodItem from "./FoodItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch(); 

    const handleClearCart = ()=>{
        dispatch(clearCart());

    }

    return ( 
        <div>
            <button 
            className="font-bold bg-red-400" 
            onClick={() => handleClearCart()}
            >
            Clear cart
            </button>

            <div className="flex flex-wrap">
                {cartItems.map((item)=>(
                    <FoodItem key={item.card.info.id} {...item.card.info}/>
                ))}             
            </div>
        </div>
    );
}

export default Cart;