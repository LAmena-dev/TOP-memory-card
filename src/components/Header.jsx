import "../styles/tailwind.css";

const Header = ({ score = 0, best = 0, handleReset }) => {
  return (
    <header className="flex justify-between bg-gray-500 px-4 md:px-8 py-4">
      <div className="flex flex-col justify-between gap-2">
        <h1 className="text-2xl md:text-5xl font-bold">Pokemon Memory Game</h1>
        <p className="font-bold text-xs sm:text-sm md:text-xl">
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <b className="text-lg font-bold">Score: {score}</b>
        <b className="text-lg font-bold">Best Score: {best}</b>
        <button
          className="border-blue-500 border-4 rounded-2xl font-bold bg-blue-100 hover:bg-blue-200 p-2 cursor-pointer transition-colors text-sm md:text-base"
          onClick={handleReset}
        >
          Reset Game
        </button>
      </div>
    </header>
  );
};

export default Header;
