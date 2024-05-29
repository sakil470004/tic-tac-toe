import React, { useState } from "react";
import GameBox from "./GameBox";

export default function GameUi() {
  const [gameLogic, setGameLogic] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  //   here player 1 is represented by 1 and player 2 is represented by 2
  //  player 1 is represented by x and player 2 is represented by o
  // player true means player 1 and false means player 2
  const [player, setPlayer] = useState(true);
  return (
    <div className="grid grid-cols-3 ">
      {gameLogic.map((value, index) => {
        return (
          <GameBox
            key={index}
            index={index}
            value={value}
            gameLogic={gameLogic}
            setGameLogic={setGameLogic}
            player={player}
            setPlayer={setPlayer}
          />
        );
      })}
    </div>
  );
}
