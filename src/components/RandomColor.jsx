import { useState } from "react";
import style from "../assets/style/randomColor.module.css";

function RandomColor() {
  const colors = [
    "#84b2d1",
    "#84d1c3",
    "#c084d1",
    "#e0d590",
    "#946ca5",
    "#d285b8",
    "#eebdde",
    "#eecdbd",
    "#958fd4",
    "#4d497f",
    "#497f57",
    "#7f7a49",
    "#454f7c",
    "#7d3847",
    "#7d3838",
  ];
  const defaultColor = "#d285b8";
  const boxCount = Array(colors.length).fill(defaultColor);
  const [color, setColor] = useState(boxCount);

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  function handleClick(index) {
    const newColors = [...color];
    newColors[index] = getRandomColor();
    setColor(newColors); // Update the state
  }

  return (
    <div className={style.box}>
     
      <div className={style.container}>
        {color.map((boxColor, index) => (
          <div
            key={index}
            className={style.colorBox}
            style={{ backgroundColor: boxColor }}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default RandomColor;
