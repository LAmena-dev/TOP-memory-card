const Header = ({ score = 0, best = 0 }) => {
  return (
    <div>
      <div>
        <h1>Memory Game</h1>
        <b>
          <p>
            Get points by clicking on an image but don't click on any more than
            once!
          </p>
        </b>
      </div>
      <div>
        <b>Score: {score}</b>
        <b>Best Score: {best}</b>
      </div>
    </div>
  );
};

export default Header;
