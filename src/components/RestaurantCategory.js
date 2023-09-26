import ItemsList from './ItemsList';
const RestaurantCategory = ({ data, showItems, set }) => {
  const handelClick = () => {
    set();
  }
  return (
    <div className='font-semibold shadow-md mb-6'>
      <div className="p-4 text-lg flex justify-between cursor-pointer" onClick={handelClick}>
        <div>{data?.title}({data?.itemCards.length})</div>
        {showItems ? <div>🔼</div> : <div>🔽</div>}
      </div>
      { showItems && <ItemsList items={data?.itemCards} /> }
    </div>
    );
  };

export default RestaurantCategory