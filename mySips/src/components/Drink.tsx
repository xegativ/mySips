import { useState } from "react";

function Drink(props) {
  const [starArr, setStarArr] = useState([false, false, false, false, false]);

  const onClickStar = (index: number) => {
    const updatedArr = starArr.map((item, i) => {
      if (index <= i) {
        item = true;
      } else {
        item = false;
      }
      return item;
    });

    setStarArr(updatedArr);
  };

  return (
    <div className="drinkBox">
      <div className="dB-navbar">
        <p>00{props.number}</p>
      </div>

      <div className="dB-content">
        <h1>Drink name</h1>
        <h2>Drink description</h2>
        <div className="star-div">
          {starArr
            .map((item, index) => {
              return (
                <div
                  className="star"
                  key={index}
                  onClick={() => onClickStar(index)}
                >
                  {item ? "[X]" : "[ ]"}
                </div>
              );
            })
            .reverse()}
        </div>
      </div>
    </div>
  );
}

export default Drink;
