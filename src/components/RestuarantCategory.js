import ItemList from "./ItemList";

const RestuarantCategory = ({data, showItems, setShowIndex, showIndex}) => {

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div className="bg-gray-50 mx-auto my-4 p-4 shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">
                    {data.title} ({data.itemCards.length})
                </span>
                <span>⬇️</span>
            </div>
            {showItems && <ItemList items={data.itemCards}/>}
        </div>
    );
}

export default RestuarantCategory;