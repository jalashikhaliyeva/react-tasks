import { useState } from "react";

const image1Url =
  "https://i.ebayimg.com/images/g/V7kAAOSw7MtdTWoL/s-l1200.webp";
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
