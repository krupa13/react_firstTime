import RestaurentCard from "./RestuarentCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./shimmer";

const Body = () => {

    //* Local State Variable
    const [ListOfRestuarents, setListOfRestuarents] = useState([]);

    const [FilteredRestuarents, setFilteredRestuarents] = useState([]);

    console.log(ListOfRestuarents);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        
        const result = await data.json();
        setListOfRestuarents(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestuarents(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return ListOfRestuarents.length === 0 ? <ShimmerCard /> : (
        <div className="body">
            <div className="filter">
                <div className="search-filter">
                    <input type="text" 
                           className="searchInput" 
                           value={searchText}
                           onChange={(e) => {
                            setSearchText(e.target.value);
                           }}       
                    />
                    <button 
                        onClick={() => {
                            const filteringRestuarents = ListOfRestuarents.filter((res) => 
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestuarents(filteringRestuarents);
                        }}
                    >
                        Search
                    </button>
                </div>
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
                    FilteredRestuarents.map((restuarent) => 
                        <RestaurentCard key={restuarent.info.id} resData = {restuarent} />)
                }
            </div>
        </div>
    );
}

export default Body;