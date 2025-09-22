import React, { useState } from "react";
import Mile from "./Mile/Mile";
// strIngredient2

const Milels = ({ api }) => {
  const [videos, setVideos] = useState(false);
 const [text, setText] = useState(false);
 const setText3 = () => {
    {
        text? setText(true) : setText(false)
    }
 }
  const [arr, setArr] = useState([]);
  const videoHendlear = (dataPass) => {
    console.log("Handle Videos");
    {
      videos ? setVideos(false) : setVideos(true);
    }
    const newArr = [...arr, dataPass];
    setArr(newArr);
  };
  return (
    <div>
      <div>
        {videos
          ? arr.map((o) => (
              <div>
                <h3>{text ? "Over Oile": ""}</h3>
              </div>
            ))
          : ""}
      </div>
      {api.map((element) => (
        <Mile
          key={element.idMeal}
          element={element}
          videoHendlear={videoHendlear}
        ></Mile>
      ))}
    </div>
  );
};

export default Milels;
