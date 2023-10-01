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
  const [drinkArr, setDrinkArr] = useState<React.ReactElement[]>([]);

  const eventDelete = (ID: number) => {
    console.log(ID);
    console.log(typeof drinkArr);
    // const tmpArr = drinkArr;

    const tmpArr = drinkArr.filter((i: any) => i.id !== ID);
    // console.log(tmpArr);

    setDrinkArr(tmpArr);
  };

  const onClickAdd = () => {
    setDrinkArr([
      ...drinkArr,
      <Drink
        key={drinkArr.length}
        number={drinkArr.length}
        onClick={() => eventDelete(drinkArr.length)}
      ></Drink>,
    ]);
    console.log(drinkArr);
  };

  // const onClickAdd = () => {
  //   setDrinkArr([
  //     ...drinkArr,
  //     <button
  //       key={drinkArr.length}
  //       onClick={() => eventDelete(drinkArr.length)}
  //     >
  //       hi
  //     </button>,
  //   ]);
  //   console.log(drinkArr);
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
