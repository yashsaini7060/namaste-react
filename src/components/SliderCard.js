import React from 'react'

const SliderCard = (props) => {
  return (
    <div className="slider-card">
      <img src={props.imgLink} className="slidercard-img" />
    </div>
  )
}

export default SliderCard