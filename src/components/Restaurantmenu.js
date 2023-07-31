import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Restaurantmenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6304203&lng=77.21772159999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        // console.log(json);
        setResInfo(json.data);
    }
    return (
        <div>
            <h1>Restaurt Name</h1>
            <h2>Menu</h2>
            <p>{resId}</p>
            <h3>{resInfo?.cards[0]?.card?.card?.info?.name}</h3>
        </div>
    )
}
export default Restaurantmenu;