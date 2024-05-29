import xImg from "../../assets/x.png";
import oImg from "../../assets/o.png";
function GameBox({ index, value, gameLogic, setGameLogic, player, setPlayer,winningLogic }) {
  return (
    <div className=" w-48 h-48 border-4 bg-blue-500 border-blue-500">
      <div className="w-full p-2 h-full bg-white"
      onClick={() => {
        // if the box is empty then only we can change the value
        if (gameLogic[index] === 0) {
          setGameLogic((prev) => {
            const newGameLogic = [...prev];
            newGameLogic[index] = player ? 1 : 2;
            return newGameLogic;
          });
          setPlayer((prev) => !prev);
        }
      }}
      >
        {gameLogic[index] ? (
          <img
            src={gameLogic[index]===1 ? xImg : oImg}
            alt="tic tac toe piece"
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>
    </div>
  );
}

export default GameBox;
