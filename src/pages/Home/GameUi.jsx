import React, { useEffect, useState } from "react";
import GameBox from "./GameBox";

export default function GameUi() {
  const [gameLogic, setGameLogic] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  //   here player 1 is represented by 1 and player 2 is represented by 2
  //  player 1 is represented by x and player 2 is represented by o
  // player true means player 1 and false means player 2
  const winningLogic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [player, setPlayer] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const [winnerIndex, setWinnerIndex] = useState(null);

  const handleReset = () => {
    setGameLogic([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setPlayer(true);
    setAccepted(false);
    setWinnerIndex(null);
  };

  return (
    <div>
      <button
        onClick={handleReset}
        className="btn btn-error btn-sm btn-outline mb-4"
      >
        Reset
      </button>

      <div className="grid grid-cols-3 ">
        {gameLogic.map((value, index) => {
          return (
            <GameBox
              key={index}
              index={index}
              gameLogic={gameLogic}
              setGameLogic={setGameLogic}
              player={player}
              setPlayer={setPlayer}
              winningLogic={winningLogic}
              accepted={accepted}
              setAccepted={setAccepted}
              setWinnerIndex={setWinnerIndex}
              winnerIndex={winnerIndex}
            />
          );
        })}
      </div>
    </div>
  );
}
