import { useState, useEffect, useRef } from "react";

import Tags from "./Tags";

import starSVG from "../assets/star-white.svg";
import trashSVG from "../assets/trash.svg";
import uploadSVG from "../assets/upload-photo.svg";
import shareSVG from "../assets/share.svg";
import saveSVG from "../assets/save.svg";

function Drink({
  ID,
  name,
  navNum,
  address,
  description,
  tags,
  stars,
  eventDelete,
  eventSave,
}) {
  // console.log("Rendered drink #" + number);
  const [starArr, setStarArr] = useState(stars);
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [file, setFile] = useState<string | undefined>(undefined);
  const [tagArr, setTagArr] =
    useState<{ tagName: string; c: string; tagID: number }[]>(tags);

  useEffect(() => {
    // console.log("useEffect: tagArr (Drink)");
    // console.log(tagArr);
  }, [tagArr]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

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

  const handleBlur = () => {
    // will never be called null, thus add ! operator
    const nameVal = nameRef.current!.value;
    const addressVal = addressRef.current!.value;
    const descVal = descRef.current!.value;
    console.log(nameVal + ", " + addressVal + ", " + descVal);
    // save to App here
  };

  // update the tag arr from Tag to Drink
  // may need to change names for readability
  const updateTagArr = (
    updatedTagArr: { tagName: string; c: string; tagID: number }[]
  ) => {
    console.log("Tags (batched state):");
    console.log(updatedTagArr);

    setTagArr(updatedTagArr);

    console.log(tagArr);
    // save to App here
  };

  const callEventSave = () => {
    console.log("Drink called save! eventSave callback...");
    console.log(tagArr);
    eventSave({
      ID: ID,
      name: nameRef.current!.value,
      address: addressRef.current!.value,
      description: descRef.current!.value,
      tags: tagArr,
      stars: starArr,
    });
  };

  return (
    <div className="box drink-box">
      <div>
        <div className="dB-navbar">
          <p onClick={() => onClickNav()}>{tabNumber(navNum)}</p>

          {isOptionsVisible && (
            <div className="dB-options">
              <img
                src={saveSVG}
                alt="Save"
                className="icon"
                onClick={callEventSave}
              ></img>
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
                onClick={eventDelete}
              />
            </div>
          )}
        </div>
      </div>

      <div className="dB-content">
        <Tags tags={tags} updateTagArr={updateTagArr}></Tags>

        <input
          type="text"
          className="drink-name"
          defaultValue={name}
          onBlur={handleBlur}
          ref={nameRef}
        ></input>

        {file && <img src={file} alt="Selected" className="drink-img" />}

        <input
          type="text"
          className="drink-addr"
          defaultValue={address}
          onBlur={handleBlur}
          ref={addressRef}
        ></input>
        <textarea
          // type="text"
          className="drink-desc"
          defaultValue={description}
          onBlur={handleBlur}
          ref={descRef}
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
