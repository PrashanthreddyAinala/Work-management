import React from "react";

function NewComponent() {
  return (
    <div>
      <div className="sm">
        <hr />
        <p>component</p>
        <hr />x
      </div>
      <textarea type="text" placeholder="Description" />
      <div className="comp">
        <input
          type="text"
          // value={item.name}
          // onChange={(e) => handlename(item.id, e)}
        />
        <p>Quantity</p>
        <input
          type="text"
          // value={item.name}
          // onChange={(e) => handlename(item.id, e)}
        />
        <p>Rate</p>
        <input
          type="text"
          // value={item.name}
          // onChange={(e) => handlename(item.id, e)}
        />
        <p>Units</p>
      </div>
      <div className="footer">
        <p>
          <i className="fa fa-inr">2000</i>
        </p>
        <button>Add Venders/Material</button>
      </div>
    </div>
  );
}
export default NewComponent;
