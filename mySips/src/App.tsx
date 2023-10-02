import "./App.css";
import Drink from "./components/Drink";
import AddNew from "./components/AddNew";
import Title from "./components/Title";
import NavBar from "./components/NavBar";

import { useState } from "react";
import uuid from "react-uuid";

function App() {
  // define data
  // put data when displaying Drink
  // when delete, delete from numArr index
  // -> also delete from dataArr

  const [dataArr, setDataArr] = useState<any>([]);
  //   {
  //     name: "myDrink1",
  //     address: "Drink address",
  //     description: "Drink description",
  //   },
  //   {
  //     name: "myDrink2",
  //     address: "Drink address",
  //     description: "Drink description",
  //   },
  // ]);

  const eventDelete = (drinkID) => {
    console.log("Delete called on ID " + drinkID);
    console.log("dataArr.length: " + dataArr.length);
    // const removeNumArr = [...numArr].filter((_, index) => index !== ID);
    let removeDataArr = [...dataArr].filter(
      (item, index) => item.ID !== drinkID
    );

    // for (let i = 0; i < removeDataArr.length; i++) {
    //   removeDataArr[i].number = i;
    // }

    // setNumArr(removeNumArr);
    setDataArr(removeDataArr);
    console.log(dataArr);
  };

  const onClickAdd = () => {
    // setNumArr((prevArr) => prevArr.concat(numArr.length));
    setDataArr((prevArr) =>
      prevArr.concat({
        ID: uuid(),
        name: "myDrink" + dataArr.length,
        address: "Drink address",
        description: "Drink description",
      })
    );

    // console.log(numArr);
    console.log(dataArr);
  };

  // for debugging
  const printArr = () => {
    // console.log(numArr);
    console.log(dataArr);
  };

  // const delArr = () => {
  //   setNumArr((prevArr) =>
  //     prevArr.filter((_, index) => index !== numArr.length - 2)
  //   );
  // };

  return (
    <div>
      <Title></Title>
      <NavBar></NavBar>
      <div className="grid-row">
        {dataArr.map((item, index: number) => {
          return (
            <Drink
              key={item.ID}
              ID={item.ID}
              navNum={index}
              name={item.name}
              address={item.address + item.ID}
              eventDelete={() => eventDelete(item.ID)}
            ></Drink>
          );
        })}
        <AddNew onClickAdd={onClickAdd}></AddNew>
      </div>
    </div>
  );
}

export default App;
