import "./App.css";
import Drink from "./components/Drink";
import AddNew from "./components/AddNew";
import Title from "./components/Title";
import NavBar from "./components/NavBar";

import { useState, useEffect } from "react";
import uuid from "react-uuid";

function App() {
  // define data
  // put data when displaying Drink
  // when delete, delete from numArr index
  // -> also delete from dataArr

  const [dataArr, setDataArr] = useState<
    {
      ID: string;
      name: string;
      address: string;
      description: string;
      tags: { tagName: string; c: string; tagID: number }[];
      stars: boolean[];
    }[]
  >([]);

  useEffect(() => {
    console.log("useEffect: dataArr");
    console.log(dataArr);
  }, [dataArr]);

  const [dataTagBool, setDataTagBool] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
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

  // deleting Drinks callback func
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
    console.log("Deleted Drink, updated (batch state):");
    console.log(dataArr);
  };

  // onClick for adding Drinks
  const onClickAdd = () => {
    // setNumArr((prevArr) => prevArr.concat(numArr.length));

    const prevArr = dataArr.concat({
      ID: uuid(),
      name: "myDrink" + dataArr.length,
      address: "Drink address",
      description: "Drink description",
      tags: [],
      stars: [false, false, false, false, false],
    });

    setDataArr([...prevArr]);

    // console.log(numArr);
    console.log("Added Drink, updated (batch state):");
    console.log(dataArr);
  };

  // for debugging
  const printArr = () => {
    // console.log(numArr);
    console.log(dataArr);
  };

  // dataTagBool: Boolean[]
  // activate filter
  const onClickFilter = (dataTagBoolUpdate: boolean[]) => {
    console.log("Retrieving filter settings");
    console.log(dataTagBoolUpdate);
    setDataTagBool(dataTagBoolUpdate);
  };

  // individual save function
  const eventSave = (data: {
    ID: string;
    name: string;
    address: string;
    description: string;
    tags: { tagName: string; c: string; tagID: number }[];
    stars: boolean[];
  }) => {
    console.log("Event save reached App!");
    setDataArr(
      dataArr.map((item, index) => {
        if (data.ID == item.ID) {
          // return changed item
          return data;
        } else {
          // return same item as before
          return item;
        }
      })
    );
  };

  const includesTag = (data: {
    ID: string;
    name: string;
    address: string;
    description: string;
    tags: { tagName: string; c: string; tagID: number }[];
    stars: boolean[];
  }) => {
    // will have to change this implementation in the future since
    // NavBar returns true or false instead of array of tags selected

    // iterate through dataTagBool
    // iterate through Drink tags
    // check for matching, return true, else false

    console.log("Checking tags");

    // for each tag in the Drink
    // if dataTagBool[data.tags[i].tagID] == true
    for (let i = 0; i < data.tags.length; i++) {
      if (dataTagBool[data.tags[i].tagID] == true) {
        return true;
      }
    }

    return false;
  };

  // const delArr = () => {
  //   setNumArr((prevArr) =>
  //     prevArr.filter((_, index) => index !== numArr.length - 2)
  //   );
  // };

  return (
    <div>
      <Title></Title>
      <NavBar onClickFilter={onClickFilter}></NavBar>
      <div className="grid-row">
        {dataArr.map((item, index: number) => {
          if (
            includesTag(item) == true ||
            dataTagBool.every((x) => x === false)
          ) {
            return (
              <Drink
                key={item.ID}
                ID={item.ID}
                navNum={index}
                name={item.name}
                address={item.address}
                description={item.description}
                tags={item.tags}
                stars={item.stars}
                eventDelete={() => eventDelete(item.ID)}
                eventSave={eventSave}
              ></Drink>
            );
          }
        })}
        <AddNew onClickAdd={onClickAdd}></AddNew>
      </div>
    </div>
  );
}

export default App;
