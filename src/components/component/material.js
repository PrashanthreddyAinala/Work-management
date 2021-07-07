import React from "react";

function Material() {
  return (
    <div>
      <div className="sm">
        <hr />
        <p>Material</p>
        <hr />
      </div>
      <div className="material">
        <input
          type="text"
          // value={item.name}
          // onChange={(e) => handlename(item.id, e)}
        />
        <p></p>
        <input
          type="text"
          // value={item.name}
          // onChange={(e) => handlename(item.id, e)}
        />
        <p>Item</p>
        <input
          type="text"
          // value={item.name}
          // onChange={(e) => handlename(item.id, e)}
        />
        <p>Specification</p>
      </div>
      <div className="material">
        <input
          type="text"
          // value={item.name}
          // onChange={(e) => handlename(item.id, e)}
        />
        <p></p>
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
      </div>
    </div>
  );
}
export default Material;
