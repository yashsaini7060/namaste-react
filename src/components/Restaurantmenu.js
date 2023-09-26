import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
const Restaurantmenu = () => {
    const { resId } = useParams();
    
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);
    // console.log(resInfo);
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=> c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log(categories);
    return (!categories)  ? <Shimmer /> :  (
        <div className="w-5/12  mx-auto my-10">
            <h1 className="my-[30px] text-2xl font-bold">{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
            {categories && categories.length > 0 && categories.map((c, index) => <RestaurantCategory key={c?.card?.card.title}  data={c?.card?.card} showItems={index === showIndex ? true : false} set={() => showIndex===index ? setShowIndex(null): setShowIndex(index)}/>)  }
            
        </div>
    )
}
export default Restaurantmenu;