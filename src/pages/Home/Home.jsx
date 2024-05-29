import { Toaster } from "react-hot-toast";
import GameUi from "./GameUi";

const Home = () => {
  return (
    <div className="max-w-lg mx-auto my-10">
      <GameUi />
      <Toaster />
    </div>
  );
};

export default Home;
