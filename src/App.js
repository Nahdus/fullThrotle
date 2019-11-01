import React, { useState, useEffect } from "react";

import "./App.css";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import Slider from "./Components/slider/slider";
import Sidenav from "./Components/sideNav/sideNav"

function App() {
  const [amount, setAmount] = useState(1500);
  const [maxAmount] = useState(5000);
  const [months, setMonths] = useState(12);
  const [maxMonths] = useState(24);

  const style = { width: 600, margin: 50 };

  const onAmountChange = value => {
    setAmount(value);
  };

  const onDuationChange = value => {
    setMonths(value);
  };

  return (
    <div className="App">
   
      <Slider
        sliderName={"loan amount"}
        placeholder1={"$"}
        onChange={onAmountChange}
        min={500}
        max={5000}
        value={amount}
      />
      
        <Slider
          sliderName={"Tenure"}
          placeholder2={"months"}
          onChange={onDuationChange}
          min={6}
          max={24}
          value={months}
        />
        <Sidenav/>
    </div>
  );
}

export default App;
