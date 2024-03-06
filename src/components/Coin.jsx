import { useState } from "react";

const image1Url =
  "https://media.istockphoto.com/id/1130217066/photo/canadian-one-dollar-coin-known-as-loonie.jpg?s=612x612&w=0&k=20&c=39DSCoJ4p1DwB0wlLdUattq8k8l8Js6uVZEVCpi8r3w=";
const image2Url =
  "https://upload.wikimedia.org/wikipedia/en/e/e0/Canadian_Dollar_-_obverse.png";

function Coins() {
  const [count, setCount] = useState(0);
  const [coin, setCoin] = useState(false);

  function handleCoin() {
    const newIcon = !coin;
    setCoin(newIcon);
  }
  console.log(coin);

  const generalImg = coin == true ? image1Url : image2Url;
  console.log(generalImg);

  return (
    <>
      <img src={generalImg} width={200} />
      <button onClick={handleCoin}>CLICK</button>
    </>
  );
}

export default Coins;
