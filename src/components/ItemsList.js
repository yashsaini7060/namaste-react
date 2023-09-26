import React from 'react'
import Shimmer from './Shimmer';
import { MEDIA_API, MEDIA_API } from '../utils/constant';
function ItemsList({ items, visible }) {
  // console.log(items);
  return (!items) ? <Shimmer /> : (
    <div className='p-4'>
      {
        items.map((item , index )=>
          <div key={index} className='felx flex-col'>
            <div className='flex h-[120px] justify-between'>
              <div className='w-7.5/12'>
                <h3>{item?.card?.info?.name}</h3>
                <h5 className='my-1 font-light text-sm'>₹ {item?.card?.info?.price / 100}</h5>
                <p className='w-[550px] my-2 font-extralight text-md text-[#282c3f73]'>{item?.card?.info.description}</p>
              </div>
              <div className='relative w-2/12'>
                <img className='w-[120px] h-[110px] rounded-md mx-auto my-auto' src={MEDIA_API + item?.card?.info?.imageId} alt="" />
                <button className='absolute bottom-[-1] rounded-md left-5 h-[34px] w-[94px] bg-white text-sm shadow-md text-[#60b246]'>ADD</button>
              </div>
            </div>
            <div className='h-[1px] bg-[#d3d3d3] mt-2 mb-3'></div>
          </div>
        )
      }
    </div>
  );
};

export default ItemsList;