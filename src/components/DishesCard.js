import { useContext } from "react";
import { CDN_URL, STAR_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";
const DishesCard = (props) => {
  const { resData } = props;
  const data = resData?.info;
  const {loggedInUser} = useContext(UserContext);
  // const loggedInUser = "Yash";
  // console.log(contextdata.loggedInUser);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
  } = data;
  return (
    <div className="w-[20rem] text-[#686b78] mb-[25px]">
      <div>
        <img
          src={ CDN_URL + cloudinaryImageId }
          className="card-img"
        />
      </div>
      <h4 className="my-[8px] text-[17px] font-[500] ">{name}</h4>
      <p className="text-[14px] text-[#686b78] my-[4px]">{cuisines[0]}</p>
      <div className="flex justify-between">
        <div className="flex justify-center items-center bg-[#20953C] text-white w-[43px] h-[20px]">
          <img src= {STAR_URL} className="h-[12px] mr-[2px]"
          />
          <p>{avgRating}</p>
        </div>
        <div>•</div>
        <div>{sla.slaString}</div>
        <div>•</div>
        <div>{costForTwo}</div>
      </div>
      <p>{loggedInUser}</p>
    </div>
  );
};


export const withPromotedLabel = (DishesCard) => {
  return (props) => {
    return (
      <div>
      <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Excelent</label>
      <DishesCard {...props}/>
      </div>
    );
  };
};

export default DishesCard;