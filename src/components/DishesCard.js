import { CDN_URL, STAR_URL } from "../utils/constant";
const DishesCard = (props) => {
  const { resData } = props;
  const data = resData?.info;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
  } = data;
  return (
    <div className="dishes-card">
      <div className="dishes-image">
        <img
          src={ CDN_URL + cloudinaryImageId }
          className="card-img"
        />
      </div>
      <h4 className="res-head">{name}</h4>
      <p className="res-des">{cuisines[0]}</p>
      <div className="res-details">
        <div className="rating">
          <img src= {STAR_URL} className="star"
          />
          <p>{avgRating}</p>
        </div>
        <div>•</div>
        <div className="time">{sla.slaString}</div>
        <div>•</div>
        <div className="two-price">{costForTwo}</div>
      </div>
    </div>
  );
};

export default DishesCard;
