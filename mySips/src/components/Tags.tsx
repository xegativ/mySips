import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

function Tags({ tags, updateTagArr }) {
  //   const [tags, setTags] = useState([
  //     <div className="tag" style={{ backgroundColor: "red" }}>
  //       Fruit
  //     </div>,
  //     <div className="tag" style={{ backgroundColor: "cyan" }}>
  //       Pearls
  //     </div>,
  //     <div className="tag" style={{ backgroundColor: "orange" }}>
  //       +
  //     </div>,
  //   ]);

  // available tags
  // must add:
  // - ability to filter based off of tags
  // - create new tags
  // - delete tags

  const dataTag = [
    { tagName: "Fruit", c: "orange", tagID: 0 },
    { tagName: "Coffee", c: "orange", tagID: 1 },
    { tagName: "Milk", c: "orange", tagID: 2 },
    { tagName: "Hot", c: "orange", tagID: 3 },
    { tagName: "Cold", c: "orange", tagID: 4 },
    { tagName: "Pearls", c: "orange", tagID: 5 },
  ];

  const dataAdd = { tagName: "+", c: "orange", tagID: -1 };

  const [tagArr, setTagArr] =
    useState<{ tagName: string; c: string; tagID: number }[]>(tags);
  const [isOptionsVisible, setOptionsVisible] = useState(false);

  useEffect(() => {
    console.log("useEffect: tagArr (Tags)");
    console.log(tagArr);
    updateTagArr(tagArr);
  }, [tagArr]);

  // add existing tag
  const addTag = (index: number) => {
    console.log("Adding tag..." + dataTag[index].tagName);

    const addTagArr = [...tagArr].concat(dataTag[index]);

    setTagArr(addTagArr);
    console.log(addTagArr);
    console.log(tagArr);

    // update tagArr -> Drink -> App
    updateTagArr(tagArr);
  };

  // call delete option
  const deleteTag = (index: number) => {
    setTagArr((prevTagNames) => prevTagNames.filter((_, id) => id !== index));

    // update tagArr -> Drink -> App
    updateTagArr(tagArr);
  };

  // onClick tag to show and hide delete option
  const onClickTag = () => {
    if (isOptionsVisible == true) {
      setOptionsVisible(false);
    } else {
      setOptionsVisible(true);
    }
  };

  return (
    <div className="tag-block">
      {tagArr.map((input, index) => {
        return (
          <div
            className="tag"
            style={{ backgroundColor: input.c }}
            onClick={() => onClickTag()}
          >
            {input.tagName}
            {isOptionsVisible && (
              <div
                style={{ opacity: 1, cursor: "pointer" }}
                onClick={() => deleteTag(index)}
              >
                ✘
              </div>
            )}
          </div>
        );
      })}
      <Popup
        trigger={
          <div className="tag" style={{ backgroundColor: dataAdd.c }}>
            {dataAdd.tagName}
          </div>
        }
        position="right center"
      >
        <div style={{ color: "black", userSelect: "none" }}>Add Tags:</div>
        {dataTag.map((item, index) => {
          return (
            <div
              className="tag tag-popup"
              style={{ color: "black", backgroundColor: dataAdd.c }}
              onClick={() => addTag(index)}
            >
              {dataTag[index].tagName}
            </div>
          );
        })}
      </Popup>
    </div>
  );
}

export default Tags;
