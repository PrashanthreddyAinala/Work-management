import React, { createContext, useState } from "react";
import { data } from "./data/data";

export const UnitContext = createContext();

export function Data(props) {
  const [unitData, setUnitData] = useState(data);
  const [show, setShow] = useState(false);
  const [singleData, setSingleData] = useState();
  const [sampleData, setsampleData] = useState();

  // adding new unit
  function addunit() {
    const newData = {
      name: "",
      id: Math.random(),
      components: []
    };
    setUnitData([...unitData, newData]);
    console.log(unitData);
  }

  // handling unit name
  function handlename(id, e) {
    const data = [...unitData];
    setsampleData(e.target.value);
    data.map((item) => {
      if (item.id === id) {
        return (item.name = sampleData);
      } else {
        return null;
      }
    });
  }

  // delete unit
  function delUnit(id) {
    const data = [...unitData];
    const newArr = data.filter((item) => item.id !== id);
    setUnitData(newArr);
  }

  // showing add components
  function showAddComponents(id) {
    setShow(true);
    const newData = unitData.filter((item) => item.id === id);
    setSingleData(newData);
  }

  // attaching component
  function attachcomponent(id) {
    const dummy = [...unitData];
    const newData = {
      description: "",
      id: Math.random(),
      quantity: 0,
      rate: 0,
      units: ""
    };
    const sample = dummy.map((item) => {
      if (item.id === id) {
        return { ...item, components: [...item.components, newData] };
      } else {
        return { ...item };
      }
    });
    setUnitData(sample);
  }

  return (
    <UnitContext.Provider
      value={{
        unitData,
        addunit,
        handlename,
        delUnit,
        showAddComponents,
        show,
        singleData,
        attachcomponent
      }}
    >
      {props.children}
    </UnitContext.Provider>
  );
}
