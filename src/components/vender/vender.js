import React from "react";
import Milestone from "./Milestone";
import "./style.css";

function Vender() {
  return (
    <div className="milestone">
      <p className="addhead">Milestones</p>
      <Milestone />
      <button
        // onClick={() => {
        //   addunit();
        // }}
        className="btn"
      >
        +
      </button>
    </div>
  );
}
export default Vender;
