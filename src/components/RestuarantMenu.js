import ShimmerCard from "./shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestuarantCategory from "./RestuarantCategory";
import { useState } from "react";

const RestuarantMenu = () => {

    const { resId } = useParams();

    const [showIndex, setShowIndex] = useState(null);

    const resInfo = useRestuarantMenu(resId);

    if(resInfo === null) return <ShimmerCard />;

    const {name, cuisines, areaName, sla, feeDetails, avgRatingString, totalRatingsString} = resInfo?.data?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = 
        resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) => 
                c.card?.card?.["@type"] === 
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    console.log(categories);

    return (
        <div className="max-w-[800px] mx-auto my-4">
            <div className="flex justify-between ">
                <div className="flex flex-col">
                    <h1 className="font-bold my-2 text-2xl">{name}</h1>
                    <div className="text-sm text-gray-600">
                        <p>{cuisines.join(",")}</p>
                        <p className="mr-3">{areaName}{", "} {sla?.lastMileTravelString}</p>
                    </div>
                    <p className="my-2 text-gray-600 text-sm">{feeDetails?.message}</p>
                </div>
                <div className="border border-green-700 max-h-[80px] my-[15px] mx-0 rounded-2xl">
                    <div className="py-[15px]">
                        <div className="text-center">
                            <span className="text-green-500 font-bold">{avgRatingString}</span>
                        </div>
                        <hr />
                        <div>
                            <span className="text-xs font-bold p-[5px]">{totalRatingsString}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b-[3px] h-1"></div>
            {categories.map((category, index) => (
                //* Controlled Component
                <RestuarantCategory 
                    key={category?.card?.card.title} 
                    data={category?.card?.card}
                    showItems={index === showIndex}
                    setShowIndex={() => setShowIndex(index)}/>
            ))}
        </div>
    );
}

export default RestuarantMenu;