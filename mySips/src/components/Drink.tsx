import { useState } from "react";

function Drink() {
  // const checkStar = (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   console.log("Checking star!");
  //   return <p>O</p>;
  // };

  // const checkAllStars = () => {};

  // const setStarArray = (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   var stars = [];
  //   var total = parseInt(event.currentTarget.id);
  //   for (let i = 0; i < 5; i++) {
  //     if (total > 0) {
  //       stars.push(true);
  //       total = total - 1;
  //     } else {
  //       stars.push(false);
  //     }
  //   }
  //   console.log(stars);
  // };
  // const initStar = () => {
  //   var stars = [true, false, false, true, false];
  //   var falseRemain = false;

  //   console.log("BEGIN CHECK");

  //   for (let i = 0; i < stars.length; i++) {
  //     console.log(stars[i]);
  //     if (stars[i] == true && falseRemain == false) {
  //       stars[i] = true;
  //     } else if (stars[i] == false && falseRemain == false) {
  //       falseRemain = true;
  //     } else if (stars[i] == true && falseRemain == true) {
  //       stars[i] = false;
  //     }
  //   }
  //   console.log("END CHECK");
  // };

  const [starVar1, setStar1Var] = useState("X");
  const [starVar2, setStar2Var] = useState("X");
  const [starVar3, setStar3Var] = useState("X");
  const [starVar4, setStar4Var] = useState("X");
  const [starVar5, setStar5Var] = useState("X");

  const changeStar1 = () => {
    setStar1Var("X");
    setStar2Var("O");
    setStar3Var("O");
    setStar4Var("O");
    setStar5Var("O");
  };

  const changeStar2 = () => {
    setStar1Var("X");
    setStar2Var("X");
    setStar3Var("O");
    setStar4Var("O");
    setStar5Var("O");
  };

  const changeStar3 = () => {
    setStar1Var("X");
    setStar2Var("X");
    setStar3Var("X");
    setStar4Var("O");
    setStar5Var("O");
  };

  const changeStar4 = () => {
    setStar1Var("X");
    setStar2Var("X");
    setStar3Var("X");
    setStar4Var("X");
    setStar5Var("O");
  };

  const changeStar5 = () => {
    setStar1Var("X");
    setStar2Var("X");
    setStar3Var("X");
    setStar4Var("X");
    setStar5Var("X");
  };

  return (
    <div className="drinkBox">
      <div className="dB-navbar">
        <p>Drink Navbar</p>
        <div>
          <p>_</p>
        </div>
        <div>
          <p>□</p>
        </div>
        <div>
          <p>X</p>
        </div>
      </div>

      <div className="dB-content">
        <h1>Drink name</h1>
        <h2>Drink description</h2>
        <button id="1" onClick={() => changeStar1()}>
          {starVar1}
        </button>
        <button id="2" onClick={() => changeStar2()}>
          {starVar2}
        </button>
        <button id="3" onClick={() => changeStar3()}>
          {starVar3}
        </button>
        <button id="4" onClick={() => changeStar4()}>
          {starVar4}
        </button>
        <button id="5" onClick={() => changeStar5()}>
          {starVar5}
        </button>
      </div>
    </div>
  );
}

export default Drink;
