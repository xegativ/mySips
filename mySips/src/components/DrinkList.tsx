import { useState } from "react";

import Drink from "./Drink";

function DrinkList() {
  // I'm sorry, I know this ruins the point of Typescript
  // but I could not find a solution without refactoring a
  // great chunk of my code :|, thus I used "any" below
  const [drinkArr, setDrinkArr] = useState<any[]>([]);

  //   const onClickAdd = () => {
  //     setDrinkArr([
  //       ...drinkArr,
  //       <Drink
  //         key={drinkArr.length}
  //         // number={drinkArr.length}
  //         eventDelete={eventDelete}
  //       ></Drink>,
  //     ]);
  //     console.log(drinkArr);
  //   };

  const onClickAdd = () => {
    const newDrinkArr = [<h1 key={drinkArr.length}>DRINK</h1>, ...drinkArr];
    setDrinkArr(newDrinkArr);
    console.log(drinkArr);
  };

  const eventDelete = (number: number) => {
    const removeArr = [...drinkArr].filter((drink: any) => drink.id !== number);
    setDrinkArr(removeArr);
  };

  return (
    <div>
      <button onSubmit={() => onClickAdd()}>Add</button>
      <Drink drinkArr={drinkArr} eventDelete={eventDelete}></Drink>
    </div>
  );
}

export default DrinkList;
