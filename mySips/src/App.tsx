import "./App.css";
import Drink from "./components/Drink";
import AddNew from "./components/AddNew";
import Title from "./components/Title";
import NavBar from "./components/NavBar";

import { useState } from "react";

function App() {
  // I'm sorry, I know this ruins the point of Typescript
  // but I could not find a solution without refactoring a
  // great chunk of my code :|, thus I used "any" below
  const [drinkArr, setDrinkArr] = useState<any[]>([]);

  const eventDelete = (ID: number) => {
    const removeArr = [...drinkArr].filter((drink: any) => drink.id !== ID);
    setDrinkArr(removeArr);
  };

  console.log("App rendered: drinkArr: " + drinkArr);

  const onClickAdd = () => {
    setDrinkArr([
      ...drinkArr,
      <Drink
        key={drinkArr.length}
        number={drinkArr.length}
        eventDelete={() => eventDelete(drinkArr.length)}
      ></Drink>,
    ]);
    console.log(drinkArr);
  };

  // const onClickAdd = () => {
  //   setDrinkArr([...drinkArr, <h1 key={drinkArr.length}>hi</h1>]);
  // };

  // { id: 1, drink: drink, completed: false }

  // const onClickAdd = () => {
  //   const tmpArr = drinkArr.concat([
  //     <Drink
  //       key={drinkArr.length}
  //       number={drinkArr.length}
  //       onClick={() => eventDelete(drinkArr.length)}
  //     ></Drink>,
  //   ]);
  //   console.log(drinkArr.length);
  //   setDrinkArr(tmpArr);
  // };

  // <AddNew onClick={onClick}></AddNew>

  return (
    <div>
      <Title></Title>
      <NavBar></NavBar>
      <div className="grid-row">
        {drinkArr}
        <AddNew onClickAdd={onClickAdd}></AddNew>
      </div>
    </div>
  );
}

export default App;
