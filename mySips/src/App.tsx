import "./App.css";
import Drink from "./components/Drink";
import AddNew from "./components/AddNew";

import { useState } from "react";

function App() {
  const elements: JSX.Element[] = [];
  const numberOfDrinks = 3;
  for (let i = 0; i < numberOfDrinks; i++) {
    elements.push(<Drink key={i} number={i}></Drink>);
  }
  elements.push(<AddNew></AddNew>);

  return <div className="grid-row">{elements}</div>;
}

export default App;
