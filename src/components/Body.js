import RestaurentCard from "./RestuarentCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

    //* Local State Variable
    const [ListOfRestuarents, setListOfRestuarents] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = ListOfRestuarents.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setListOfRestuarents(filteredList);
                    }}
                >
                    Top Rated Restuarents
                </button>
            </div>
            <div className="res-container">
                {
                    ListOfRestuarents.map((restuarent) => 
                        <RestaurentCard key={restuarent.info.id} resData = {restuarent} />)
                }
            </div>
        </div>
    );
}

export default Body;