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

  // takes in props.number and decides how many zeroes in front
  const tabNumber = (val: number) => {
    var valOutput;

    if (Math.abs(val) < 10) {
      valOutput = "00" + val;
    } else {
      valOutput = "0" + val;
    }

    return valOutput;
  };

  return (
    <div className="box drink-box">
      <div className="dB-navbar">
        <p>{tabNumber(props.number)}</p>
      </div>

      <div className="dB-content">
        <input
          type="text"
          className="drink-name"
          defaultValue="myDrink"
        ></input>
        <input
          type="text"
          className="drink-desc"
          defaultValue="Drink Description"
        ></input>
        <input
          type="text"
          className="drink-addr"
          defaultValue="Address"
        ></input>

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
