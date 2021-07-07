import React, { useContext } from "react";
import { UnitContext } from "../../context";
import "./style.css";

function Addunit() {
  const {
    unitData,
    addunit,
    handlename,
    delUnit,
    showAddComponents
  } = useContext(UnitContext);

  return (
    <div className="unit">
      <p className="addhead">Add Units</p>
      <p>Room 1</p>
      {unitData.map((item) => (
        <div key={item.id}>
          <div className="add-flex">
            <input
              type="text"
              value={item.name}
              onChange={(e) => handlename(item.id, e)}
            />
            <p>
              unit
              <br />
              name
            </p>
            <button onClick={() => delUnit(item.id)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
          <button className="addbtn" onClick={() => showAddComponents(item.id)}>
            Add Components
          </button>
        </div>
      ))}
      <button
        onClick={() => {
          addunit();
        }}
        className="btn"
      >
        +
      </button>
    </div>
  );
}

export default Addunit;
