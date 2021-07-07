import React from "react";
import Work from "./work";
// import Material from "./material";
import "./style.css";

function Component() {
  return (
    <div className="component">
      <p className="addhead">Component</p>
      <div className="comp-btn">
        <button>Work</button>
        <button>Material</button>
      </div>
      <div>
        <Work />
      </div>
      <div>{/* <Material /> */}</div>
      <div>
        <button
          // onClick={() => {
          //   addunit();
          // }}
          className="btn"
        >
          +
        </button>
      </div>
    </div>
  );
}
export default Component;
