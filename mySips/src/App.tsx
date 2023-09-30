import "./App.css";
import Drink from "./components/Drink";
import AddNew from "./components/AddNew";
import Title from "./components/Title";
import NavBar from "./components/NavBar";

import { useState } from "react";

function App() {
  const onClickAdd = () => {
    const tmpArr = drinkArr.concat([
      <Drink key={drinkArr.length} number={drinkArr.length}></Drink>,
    ]);
    setDrinkArr(tmpArr);
  };

  const [drinkArr, setDrinkArr] = useState<JSX.Element[]>([]);

  // const elements: JSX.Element[] = [];
  // const elements: JSX.Element[] = [];
  // const numberOfDrinks = 3;
  // for (let i = 0; i < numberOfDrinks; i++) {
  //   elements.push(<Drink key={i} number={i}></Drink>);
  // }

  // const numberOfDrinks = 3;
  // for (let i = 0; i < numberOfDrinks; i++) {
  //   console.log(i);
  //   const tmpArr = drinkArr.concat([<Drink key={i} number={i}></Drink>]);
  //   setDrinkArr(tmpArr);
  // }

  return (
    <div>
      <Title></Title>
      <NavBar></NavBar>
      <div className="grid-row">
        {drinkArr}
        <AddNew onClick={onClickAdd}></AddNew>
      </div>
    </div>
  );
}

export default App;
