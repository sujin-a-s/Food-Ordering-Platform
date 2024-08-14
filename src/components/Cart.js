import { useSelector } from "react-redux/es/hooks/useSelector";
import FoodItem from "./FoodItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch(); 

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Your Cart</h1>
                <button 
                    className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            </div>

            {cartItems.length === 0 ? (
                <div className="text-center text-gray-500 flex justify-center items-center h-48">Your cart is empty.</div>
            ) : (
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                        {cartItems.map((item) => (
                            <FoodItem key={item.card.info.id} {...item.card.info} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
