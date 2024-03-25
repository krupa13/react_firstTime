import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = userOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-red-100 shadow-lg">
            <div className="logo-container cursor-pointer">
                <Link to="/"><img className="w-32" src={LOGO_URL} /></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="p-4">Online Status: {onlineStatus ? "🍏" : "🍎"}</li>
                    <li className="p-4 hover:underline">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-4 hover:underline"> 
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="p-4 hover:underline">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="p-4 hover:underline">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="p-4 cursor-pointer font-bold">
                        <Link to="/cart">Cart ({cartItems.length} items)</Link>
                        
                    </li>
                    <button 
                        className="login"
                        onClick={() => {
                            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                        }}>{btnNameReact}
                    </button>
                    <li className="p-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;