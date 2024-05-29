import xImg from "../../assets/x.png";
import oImg from "../../assets/o.png";
import toast from "react-hot-toast";
function GameBox({
  index,
  value,
  gameLogic,
  setGameLogic,
  player,
  setPlayer,
  winningLogic,
}) {
  return (
    <div className=" w-48 h-48 border-4 bg-blue-500 border-blue-500">
      <div
        className="w-full p-2 h-full bg-white"
        onClick={() => {
          // if the box is empty then only we can change the value
          if (gameLogic[index] === 0) {
            //   setGameLogic((prev) => {
            //     const newGameLogic = [...prev];
            //     newGameLogic[index] = player ? 1 : 2;
            //     return newGameLogic;
            //   });
            const newGameLogic = [...gameLogic];
            newGameLogic[index] = player ? 1 : 2;
            // check if the player has won the game
            for (let i = 0; i < winningLogic?.length; i++) {
              const [a, b, c] = winningLogic[i];
              if (
                newGameLogic[a] &&
                newGameLogic[a] === newGameLogic[b] &&
                newGameLogic[a] === newGameLogic[c]
              ) {
                setGameLogic(newGameLogic);
                toast.success(`Player ${player ? 1 : 2} has won the game`);
                return;
              }
            }

            // check if the game is draw
            if (!newGameLogic.includes(0)) {
              toast.error("The game is draw");
            }

            setGameLogic(newGameLogic);
            setPlayer((prev) => !prev);
          }
        }}
      >
        {gameLogic[index] ? (
          <img
            src={gameLogic[index] === 1 ? xImg : oImg}
            alt="tic tac toe piece"
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>
    </div>
  );
}

export default GameBox;
