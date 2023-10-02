import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Tags() {
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
    { tagName: "Fruit", c: "orange", tagID: 1 },
    { tagName: "Pearls", c: "orange", tagID: 1 },
  ];

  const dataAdd = { tagName: "+", c: "orange", tagID: -1 };

  const [tagNames, setTagNames] = useState([dataTag[0], dataTag[1]]);

  const deleteTag = (index: number) => {
    setTagNames((prevTagNames) => prevTagNames.filter((_, id) => id !== index));
  };

  return (
    <div className="tag-block">
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
      <Popup
        trigger={
          <div className="tag" style={{ backgroundColor: dataAdd.c }}>
            {dataAdd.tagName}
          </div>
        }
        position="right center"
      >
        <div>Popup content here !!</div>
      </Popup>
    </div>
  );
}

export default Tags;
