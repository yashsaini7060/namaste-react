import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const Restaurantmenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

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