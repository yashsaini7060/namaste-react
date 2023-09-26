import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HOME_API } from "../utils/constant";
import DishesCard, {withPromotedLabel} from "./DishesCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
import UserContext from "../utils/UserContext";
const DishesContainer = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [seachText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(DishesCard);
  const {loggedInUser, setUserName} = useContext(UserContext);

  // Below comment is for rendering mock data which is imported from ulil file 
  // const [listOfRestraunts, setListOfRestraunts] = useState(resList);
  
  const online = useOnlineStatus();
  useEffect(() => {

    fetchData();

  }, [])

  // This fetchdata function featch data from the swiggy api and set that data to listofrestaurants.
  const fetchData = async () => {
    const data = await fetch(HOME_API);
    // console.log(data

    const json = await data.json();
    console.log(json);
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setListOfRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    setFilteredRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  };
  console.log(listOfRestraunts);

  if(online === "online"){
    return(
      <h1>You are currently offline </h1>
    )
  }

  return listOfRestraunts.length === 0 ? <Shimmer /> : (
    <div>
      <div className="flex justify-between text-[20px]">
        <h3 className="font-[500]">{filteredRestraunts.length} Restaurants</h3>
        <div className="left-filter w-[52%] ">
          <ul className="flex justify-between">
            <li>Relevance</li>
            <li>Delivery Time</li>
            <li>
              <button
                onClick={() => {
                  const filteredList = listOfRestraunts.filter((res) => res.info.avgRating > 4);
                  setFilteredRestraunts(filteredList);
                }}
              >
                Rating
              </button>
            </li>
            <li>Cost: Low To High</li>
            <li>Cost: High To Low</li>
            <li>Filter</li>
          </ul>
        </div>
      </div>
      <div className="py-[1rem]">
        <input type="text" className="border-[1px]" value={seachText} onChange={(e) => {
          setSearchText(e.target.value)

        }} />
        <button onClick={() => {
          console.log(seachText);
          const filteredRestraunts = listOfRestraunts.filter((res) => res.info.name.toLowerCase().includes(seachText.toLowerCase())
          );

          setFilteredRestraunts(filteredRestraunts);

        }}>Search</button>
      </div>
      <div>
        <label>Name: </label>
      <input type="text" className="border-[1px]" value={loggedInUser} onChange={(e) => {
          setUserName(e.target.value)

        }} />
      </div>
      <div className="flex flex-wrap justify-between">
        {filteredRestraunts.map((restaurant) => (
          <Link to={"restaurants/" + restaurant.info.id} key={restaurant.info.id}  style={{ textDecoration: 'none' }} >
            {restaurant.info.avgRating>4.2 ? (<RestaurantCardPromoted resData={restaurant}/>) : (<DishesCard resData={restaurant} />) }
            {/* <DishesCard resData={restaurant} /> */}
            </Link>
        ))}
      </div>
    </div>
  );
};

export default DishesContainer;
