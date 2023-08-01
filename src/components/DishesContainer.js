import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HOME_API } from "../utils/constant";
import DishesCard from "./DishesCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const DishesContainer = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [seachText, setSearchText] = useState("");
  // Below comment is for rendering mock data which is imported from ulil file 
  // const [listOfRestraunts, setListOfRestraunts] = useState(resList);

  const online = useOnlineStatus();
  useEffect(() => {

    fetchData();

  }, [])

  // This fetchdata function featch data from the swiggy api and set that data to listofrestaurants.
  const fetchData = async () => {
    const data = await fetch(HOME_API);

    const json = await data.json();

    setListOfRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    setFilteredRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    console.log(listOfRestraunts);

  };

  if(online === "online"){
    return(
      <h1>You are currently offline </h1>
    )
  }

  return listOfRestraunts.length === 0 ? <Shimmer /> : (
    <div className="dishes-continer">
      <div className="dishes-bar">
        <h3 className="restro-count">{filteredRestraunts.length} restaurents</h3>
        <div className="left-filter">
          <ul>
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
      <div className="search-div">
        <input type="text" value={seachText} onChange={(e) => {
          setSearchText(e.target.value)

        }} />
        <button onClick={() => {
          console.log(seachText);
          const filteredRestraunts = listOfRestraunts.filter((res) => res.info.name.toLowerCase().includes(seachText.toLowerCase())
          );

          setFilteredRestraunts(filteredRestraunts);

        }}>Search</button>
      </div>
      <div className="cards-container">
        {filteredRestraunts.map((restaurant) => (
          <Link to={"restaurants/" + restaurant.info.id} key={restaurant.info.id}  style={{ textDecoration: 'none' }} ><DishesCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default DishesContainer;
