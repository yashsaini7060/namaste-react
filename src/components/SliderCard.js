import React from 'react'

const SliderCard = (props) => {
  return (
    <div className="w-[20rem] hover:scale-110 transition duration-300">
      <img src={props.imgLink} className="slidercard-img" />
    </div>
  )
}

export default SliderCard