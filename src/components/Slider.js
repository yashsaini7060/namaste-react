import React from "react";
import SliderCard from "./SliderCard";
import { linList } from "../utils/constant";
const Slider = () => {
  return (
    <div className="slider">
    {linList.map((link, index) => <SliderCard key={index} imgLink={link}/>)}
    </div>
  );
};

export default Slider;
