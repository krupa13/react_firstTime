import { useDispatch, useSelector } from "react-redux";
import ItemList from "../components/ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
    
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearItems = () => {
        dispatch(clearItem());
    }

    return (
        <div className="items-center m-4 p-3">
            <div className="flex justify-center flex-col items-center gap-4">
                <div>
                    <h1 className="font-bold text-2xl">Cart</h1>
                </div>
                <div>
                    <button 
                        className="border border-gray-900 py-3 px-4 font-bold rounded-full bg-slate-800 text-white mb-3"
                        onClick={handleClearItems}
                    >
                        Clear Cart
                    </button>
                </div>
            </div>
            <div className="w-6/12 m-auto">
                {cartItems.length === 0 ?
                    <h1 className="text-center">Cart is empty. Please add items to the cart.</h1> 
                    : <ItemList items={cartItems} />}
            </div>
        </div>
    );
};

export default Cart;