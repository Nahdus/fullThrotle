import React from "react"
import Slider ,{ createSliderWithTooltip }from "rc-slider";
import "./slider.css"

function loanSlider(props){
    
  const style = { width: 600, margin: 50 };
    return(
        <div className="section">
        <div className="loan">{props.sliderName}
        <p className="inline">  {props.placeholder1}<input value={props.value} className="inline"/>{props.placeholder2}</p>
        </div>
        <div style={style}>
          <Slider
            value={props.value}
            min={props.min}
            max={props.max}
            onChange={props.onChange}
            trackStyle={{ backgroundColor: "green", height: 10 }}
            handleStyle={{
              borderColor: "blue",
              height: 28,
              width: 28,
              marginLeft: -14,
              marginTop: -9,
              backgroundColor: "black"
            }}
            railStyle={{ backgroundColor: "#cdd6dd", height: 10 }}
          />
        </div>
      </div>
    )
}

export default loanSlider;