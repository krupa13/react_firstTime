import RestaurentCard from "./RestuarentCard";
import { useEffect, useState } from "react";
import ShimmerCard from "./shimmer";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus";
import { RESTUARANTS_URL } from "../utils/constants";

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
        const data = await fetch(RESTUARANTS_URL);
        
        const result = await data.json();

        console.log(result);

        setListOfRestuarents(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestuarents(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = userOnlineStatus();

    if(onlineStatus === false) 
        return (
          <h1>
            Looks like you're offline. Please check your internet connection!!!!!!'
          </h1>  
        );

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
                        setFilteredRestuarents(filteredList);
                    }}
                >
                    Top Rated Restuarents
                </button>
            </div>
            <div className="res-container">
                {
                    FilteredRestuarents.map((restuarent) => (
                       <Link className="res-link" key={restuarent.info.id} to={"/restuarants/" + restuarent.info.id}>
                            <RestaurentCard resData={restuarent} />
                       </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Body;