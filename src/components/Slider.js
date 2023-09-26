import React from "react";
import SliderCard from "./SliderCard";
import { linList } from "../utils/constant";
const Slider = () => {
  return (
    <div className="flex justify-between pt-[2rem] pb-[5rem]">
    {linList.map((link, index) => <SliderCard key={index} imgLink={link}/>)}
    </div>
  );
};

export default Slider;
