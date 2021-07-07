import React, { useState, useContext, useEffect } from "react";
import NewComponent from "./newcomponent";
import { UnitContext } from "../../context";
import "./style.css";

function AddComponent() {
  const { singleData, attachcomponent, show } = useContext(UnitContext);

  return (
    <div style={{ display: show ? "" : "none" }}>
      {singleData &&
        singleData.map((item) => (
          <div className="addcomp" key={item.id}>
            <p className="addhead">{item.name} - Add Components</p>
            <p>Upload Drawings/3D</p>
            <div>
              {item.components &&
                item.components.map((item) => (
                  <NewComponent key={item.id} {...item} />
                ))}
            </div>
            <button
              onClick={() => {
                attachcomponent(item.id);
              }}
              className="btn"
            >
              +
            </button>
          </div>
        ))}
    </div>
  );
}
export default AddComponent;
