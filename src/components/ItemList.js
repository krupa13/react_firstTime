import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //* Dispatch an action
        dispatch(addItem(item));
    }

    // const handleRemoveItem = (item) => {
    //     dispatch(removeItem(item))
    // }

    return (
        <div>
            {items.map((item) => (
                <div 
                    key={item.card.info.id}
                    className="px-2 pt-2 pb-4 m-2 border-gray-200 border-b-2 flex justify-between"
                >
                    <div className="w-9/12">
                        <div className="pt-2">
                            <span className="font-bold">{item.card.info.name}</span>
                        </div>
                        <div>
                            <span className="text-gray-600">
                                ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-[15px]">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 pb-6 pl-6 pr-6">
                        <div className="absolute ml-[59px] mt-[90px] text-center bg-white w-20 border border-green-400 rounded-md cursor-pointer">
                            <button 
                                className="font-bold text-green-700"
                                onClick={() => handleAddItem(item)}>
                                ADD
                            </button>
                        </div>
                        {/* <div className="ml-[45px] bottom-[40px] p-[5px] bg-white text-center border border-green-400 rounded-lg cursor-pointer">
                            
                        </div> */}
                        {/* <button 
                                className="font-bold text-green-700"
                                onClick={() => handleRemoveItem(item)}
                            >
                                Remove Item 
                            </button> */}
                        <img src={CDN_URL + item.card.info.imageId} className="w-full h-[105px] max-h-[105px] rounded-xl ml-8"/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;