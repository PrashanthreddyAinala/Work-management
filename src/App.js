import React from "react";
import Addunit from "./components/addunit/addunit";
import AddComponent from "./components/addcomponent/addcomponent";
import Component from "./components/component/component";
import Vender from "./components/vender/vender";
import Header from "./components/header/header";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header />
      <div className="App">
        <div className="blue"></div>
        <div className="addunit">
          <Addunit />
        </div>
        <div>
          <AddComponent />
        </div>
        <div>
          <Component />
        </div>
        <div>
          <Vender />
        </div>
      </div>
    </>
  );
}
