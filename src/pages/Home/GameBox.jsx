import xImg from "../../assets/x.png";
import oImg from "../../assets/o.png";
import toast from "react-hot-toast";
function GameBox({
  index,

  gameLogic,
  setGameLogic,
  player,
  setPlayer,
  winningLogic,
  accepted,
  setAccepted,
  setWinnerIndex,
  winnerIndex,
}) {
  const handlePlay = () => {
    // if the box is empty then only we can change the value
    if (gameLogic[index] === 0 && !accepted) {
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
          setWinnerIndex([a, b, c]);
          setAccepted(true);
          return;
        }
      }

      // check if the game is draw
      if (!newGameLogic.includes(0)) {
        toast.error("The game is draw");

        setAccepted(true);
      }

      setGameLogic(newGameLogic);
      setPlayer((prev) => !prev);
    }
  };

  return (
    <div className=" w-48 h-48 border-4 bg-blue-500 border-blue-500 relative">
      <div className="w-full  h-full bg-white" onClick={handlePlay}>
        {gameLogic[index] ? (
          <img
            src={gameLogic[index] === 1 ? xImg : oImg}
            alt="tic tac toe piece"
            className="w-full h-full object-cover transform scale-90 transition-transform duration-700  ease-out hover:scale-100"
          />
        ) : null}
        {winnerIndex &&
          (winnerIndex[0] === index ||
            winnerIndex[1] === index ||
            winnerIndex[2] === index) && (
            <div
              className={`absolute border-b-8 border-green-500 top-1/2 left-0 w-full divide z-30 transform transition-transform rotate-45 duration-700  ease-out animate-wiggle`}
            ></div>
          )}
      </div>
    </div>
  );
}

export default GameBox;
