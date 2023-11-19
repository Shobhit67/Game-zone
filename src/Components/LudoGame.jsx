import React, { useState } from "react";
import Common from "./Common";

// Import all dice images into an array
const diceImages = [
  require("../images/DiceImgs/dice1.png"),
  require("../images/DiceImgs/dice2.png"),
  require("../images/DiceImgs/dice3.png"),
  require("../images/DiceImgs/dice4.png"),
  require("../images/DiceImgs/dice5.png"),
  require("../images/DiceImgs/dice6.png"),
];

const LudoGame = () => {
  const [winner, setWinner] = useState(null); // State to track the winner
  const [diceValues, setDiceValues] = useState([1, 1]); // Initial dice values for Player 1 and Player 2

  const rollDice = () => {
    // Logic to generate random dice values (1 to 6) for both players
    const newDiceValues = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    setDiceValues(newDiceValues);

    // Determine the winner
    if (newDiceValues[0] > newDiceValues[1]) {
      setWinner("Player 1 Won!");
    } else if (newDiceValues[1] > newDiceValues[0]) {
      setWinner("Player 2 Won!");
    } else {
      setWinner("Draw!");
    }
  };

  return (
    <div className="Ludo-box">
      <h1>{winner ? `${winner}` : "Refresh Me"}</h1>

      <div className="dice">
        <p>Player 1</p>
        <img
          className="img1"
          src={diceImages[diceValues[0] - 1]}
          alt={`Dice ${diceValues[0]}`}
        />
      </div>

      <div className="dice">
        <p>Player 2</p>
        <img
          className="img2"
          src={diceImages[diceValues[1] - 1]}
          alt={`Dice ${diceValues[1]}`}
        />
      </div>
      <br />
      <br />
      <div className="mt-3">
        <button
          className="btn btn-outline-danger"
          style={{ width: "40%" }}
          onClick={rollDice}
        >
          Roll Dice
        </button>
      </div>
    </div>
  );
};

export default LudoGame;
