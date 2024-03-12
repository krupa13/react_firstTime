import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
    const {resData} = props;
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
                className="w-full max-h-[114px] rounded-lg"
                alt="res-logo"
                src={CDN_URL+cloudinaryImageId} 
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{locality}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    );
}

export default RestaurentCard;