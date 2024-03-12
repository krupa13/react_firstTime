import ShimmerCard from "./shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";

const RestuarantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestuarantMenu(resId);

    if(resInfo === null) return <ShimmerCard />;

    const {name, cuisines, areaName, sla, feeDetails, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")}</p>
            <p>{areaName}{", "} {sla?.lastMileTravelString}</p>
            <p>{feeDetails?.message}</p>
            <hr />
            <h3>{sla?.slaString} {" "} {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((items) => (
                    <li key={items.card.info.id}>
                        {items.card.info.name} -{" Rs."}{items.card.info.price / 100 || items.card.info.defaultPrice / 100} 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RestuarantMenu;