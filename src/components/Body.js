import RestaurentCard, {withOfferLabel} from "./RestuarentCard";
import { useEffect, useState, useContext } from "react";
import ShimmerCard from "./shimmer";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus";
import { RESTUARANTS_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {

    //* Local State Variable
    const [ListOfRestuarents, setListOfRestuarents] = useState([]);

    const [FilteredRestuarents, setFilteredRestuarents] = useState([]);

    // console.log(ListOfRestuarents);

    const [searchText, setSearchText] = useState("");

    const RestuarantCardOffer = withOfferLabel(RestaurentCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTUARANTS_URL);
        
        const result = await data.json();

        // console.log(result);

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

    const {loggedInUser, setUserName} = useContext(UserContext);

    return ListOfRestuarents.length === 0 ? <ShimmerCard /> : (
        <div className="body">
            <div className="filter flex ">
                <div className="search py-4 m-4">
                    <input type="text" 
                           className="border border-solid border-red-800 py-1" 
                           value={searchText}
                           onChange={(e) => {
                            setSearchText(e.target.value);
                           }}       
                    />
                    <button className="px-4 py-2 ml-2 bg-green-400 rounded-full"
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
                <div className="p-2 m-3 flex items-center">
                    <button
                        className="px-4 py-2 bg-slate-400 rounded-full"
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
                <div className="p-2 m-3 flex items-center">
                    <label>Username:</label>
                   <input 
                    className="border border-black p-2 ml-1" 
                    value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}/>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    FilteredRestuarents.map((restuarent) => (
                       <Link className="res-link" key={restuarent.info.id} to={"/restuarants/" + restuarent.info.id}>

                            {restuarent.info.aggregatedDiscountInfoV3?.header ? (<RestuarantCardOffer resData={restuarent} />) : (<RestaurentCard resData={restuarent} />)
                            }
                       </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Body;