import { useState, useRef } from "react";

import starSVG from "../assets/star-white.svg";
import trashSVG from "../assets/trash.svg";
import uploadSVG from "../assets/upload-photo.svg";
import shareSVG from "../assets/share.svg";

function Drink({ number, onClick }) {
  const [starArr, setStarArr] = useState([false, false, false, false, false]);
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [file, setFile] = useState<string | undefined>(undefined);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // const handleDelete = () => {
  //   console.log("Drink: Attemping to delete...");
  //   removeDrink(number);
  // };

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

  const onClickNav = () => {
    if (isOptionsVisible == true) {
      setOptionsVisible(false);
    } else {
      setOptionsVisible(true);
    }
  };

  function handleChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }

  // ref attached to svg, thus if svg clicked, goes to onClick (this func)
  // from this func, we invoke the ref.current
  // which is attached to input, and thus invokes the input button
  function handleImageClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

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
      <div>
        <div className="dB-navbar">
          <p onClick={() => onClickNav()}>{tabNumber(number)}</p>

          {isOptionsVisible && (
            <div className="dB-options">
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleChangeImage}
              />
              <img
                src={uploadSVG}
                alt="Upload"
                className="icon"
                onClick={handleImageClick}
              />

              <img src={shareSVG} alt="Share" className="icon" />
              <img
                src={trashSVG}
                alt="Delete"
                className="icon"
                onClick={onClick}
              />
            </div>
          )}
        </div>
      </div>

      <div className="dB-content">
        <input
          type="text"
          className="drink-name"
          defaultValue="myDrink"
        ></input>

        {file && <img src={file} alt="Selected" className="drink-img" />}

        <input
          type="text"
          className="drink-addr"
          defaultValue="Address"
        ></input>
        <textarea
          // type="text"
          className="drink-desc"
          defaultValue="Drink Description"
        ></textarea>

        <div className="star-div">
          {starArr
            .map((item, index) => {
              return (
                <div key={index} onClick={() => onClickStar(index)}>
                  {item ? (
                    <img src={starSVG} alt="Star" id="star-svg-on"></img>
                  ) : (
                    <img src={starSVG} alt="Star" id="star-svg-off"></img>
                  )}
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
