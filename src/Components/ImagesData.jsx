// ImagesData.jsx
import Ludo from "../images/ludo.png"
import Pubg1 from "../images/pubg1.png"
import Goku from "../images/cartoon.png"

import LudoGame from "./LudoGame"; // Import LudoGame as a component

const ImagesData = [
  {
    imgSrc: Ludo, // Use the actual component reference
    title: "Roll a Dice",
    link:"/LudoGame",
  },
  {
    imgSrc: Pubg1, // Use the actual component reference
    title: "Pubg",
    link:"#",
  },
  {
    imgSrc: Goku, // Use the actual component reference
    title: "Dragon bolz",
    link:"#",
  },
];

export default ImagesData;
