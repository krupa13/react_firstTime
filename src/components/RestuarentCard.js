import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurentCard = (props) => {
    const {resData} = props;
    
    const {loggedInUser} = useContext(UserContext);

    const {
        cloudinaryImageId,
        name,
        cuisines,
        locality,
        costForTwo,
        avgRating,
        sla
    } = resData?.info
    return (
        <div className="m-4 p-4 w-[250px] border border-solid border-slate-400 bg-gray-100 hover:bg-gray-300 rounded-lg">
            <img 
                className="w-full max-h-[114px]"
                alt="res-logo"
                src={CDN_URL+cloudinaryImageId} 
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{locality}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{sla?.slaString}</h4>
            <h4>User: {loggedInUser}</h4>
        </div>
    );
}

export const withOfferLabel = (RestaurentCard) => {
    return(props) => {
        return(
            <div className="relative">
                <label className="absolute text-white bg-gray-500 opacity-75 text-center text-lg font-bold m-2 p-2 left-[25px] top-[78px] rounded-tr-lg">
                    {props.resData.info.aggregatedDiscountInfoV3?.header}
                </label>
                <RestaurentCard {...props}/>
            </div>
        );
    }
}

export default RestaurentCard;