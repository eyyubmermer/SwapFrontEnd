import { useState } from "react";
import React from "react";
import "../App.css";
import Swap from "./Swap/Swap"
import Liquidity from "./Liquidity/Liquidity"

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs button" : "tabs button"}
          onClick={() => toggleTab(1)}
        >
          Swap
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs button" : "tabs button"}
          onClick={() => toggleTab(2)}
        >
          Liquidity
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Swap />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Liquidity />
        </div>

      </div>
    </div>
  );
}

export default Tabs;
