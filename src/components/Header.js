import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus";

const Header = () => {
    
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = userOnlineStatus();

    return (
        <div className="flex justify-between bg-red-100 shadow-lg">
            <div className="logo-container">
                <img className="w-32" src={LOGO_URL} />
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
                    <li className="p-4 cursor-pointer">Cart</li>
                    <button 
                        className="login"
                        onClick={() => {
                            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                        }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;