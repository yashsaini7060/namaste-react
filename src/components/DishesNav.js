import resList from "../utils/mockdata";

const DishesNav = () => {
  return (
    <div className="dishes-bar">
    <h3 className="restro-count">527 restaurents</h3>
    <div className="left-filter">let test = [...resList];
      <ul>
        <li>Relevance</li>
        <li>Delivery Time</li>
        <li><button onClick={()=>{
          test = test.filter(
            (res)=> res.data.data.avgRating > 4
          );
          console.log(test);
        }}>Rating</button></li>
        <li>Cost: Low To High</li>
        <li>Cost: High To Low</li>
        <li>Filter</li>
      </ul>
    </div>
  </div>
  )
}

export default DishesNav