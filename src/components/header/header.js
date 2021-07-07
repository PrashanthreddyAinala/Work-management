import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <p className="back">Back</p>
      <div className="right">
        <p>BOQ Total: </p>
        <p>Project Total: </p>
        <p>BOQ Download</p>
      </div>
    </div>
  );
}
export default Header;
