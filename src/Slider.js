import React from "react";
import "./slider.css"
function Slider(props)
{
  return(
    <div className="slider-container">
      <span className="slider txt"><h3>{props.Color}</h3></span>
      <span className="slider">
      <input onChange={props.SetSlider} type="range" min="0" max="255" value={props.Value} name={props.Name}/>
      </span>
      <span className="slider">{props.num}</span>
    </div>
  )
}

export default Slider;
