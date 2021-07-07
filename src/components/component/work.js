import React from "react";

function Work() {
  return (
    <div>
      <div className="sm">
        <hr />
        <p>Vender</p>
        <hr />
      </div>
      <div className="head">
        <p>Work Type</p>
        <p>
          <select>
            <option value="">Only work</option>
            <option value="">ABC</option>
          </select>
        </p>
      </div>
      <div className="head">
        <p>Vendor category</p>
        <p>
          <select>
            <option value="">Carpenter</option>
            <option value="">Painter</option>
          </select>
        </p>
      </div>
      <div className="work-flex">
        <input
          type="text"
          // value={item.name}
          // onChange={(e) => handlename(item.id, e)}
        />
        <p>Heading</p>
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
      <div className="work-footer">
        <p>
          <i className="fa fa-inr">2000</i>
        </p>
        <button>Add Milestones</button>
      </div>
    </div>
  );
}

export default Work;
