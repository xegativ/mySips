import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function DrinkCard() {
  const dataTag = [
    { tagName: "Fruit", c: "orange", tagID: 1 },
    { tagName: "Pearls", c: "orange", tagID: 1 },
  ];
  // drink starts
  const dataDrink = [
    {
      number: 0,
      name: "myDrink" + 0,
      address: "Drink address",
      description: "Drink description",
    },
    {
      number: 1,
      name: "myDrink" + 1,
      address: "Drink address",
      description: "Drink description",
    },
    {
      number: 2,
      name: "myDrink" + 2,
      address: "Drink address",
      description: "Drink description",
    },
  ];

  // drink display data
  const [drinkDisplay, setDrinkDisplay] = useState([
    dataDrink[0],
    dataDrink[1],
    dataDrink[2],
  ]);

  // drink ends

  const dataAdd = { tagName: "+", c: "orange", tagID: -1 };

  const [tagNames, setTagNames] = useState([dataTag[0], dataTag[1]]);

  const deleteTag = (index: number) => {
    setTagNames((prevTagNames) => prevTagNames.filter((_, id) => id !== index));
  };

  return (
    <div className="box drink-box">
      {tagNames.map((input, index) => {
        return (
          <div
            className="tag"
            style={{ backgroundColor: input.c }}
            onClick={() => deleteTag(index)}
          >
            {input.tagName}
          </div>
        );
      })}
    </div>
  );
}

export default DrinkCard;
