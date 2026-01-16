import { useState, useEffect } from "react";
import "./styles/tailwind.css";
import Cards from "./components/Cards";
import Header from "./components/Header";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function getRandomIds(count, max) {
    const ids = new Set();

    while (ids.size < count) {
      ids.add(Math.floor(Math.random() * max) + 1);
    }

    return [...ids];
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const randomIds = getRandomIds(24, 1025);

        // const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=4");
        // const data = await res.json();

        const pokemonData = await Promise.all(
          randomIds.map(async (id) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            return res.json();
          })
        );

        setCards(shuffle(pokemonData));
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  function handleCardClick(id) {
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);
      setGameOver(false);
      setCards((prev) => shuffle(prev));
      return;
    }

    setClickedCards((prev) => {
      const updatedArr = [...prev, id];
      if (updatedArr.length === cards.length) setGameOver(true);

      return updatedArr;
    });

    setScore((prev) => {
      const currentScore = prev + 1;
      setBestScore((best) => Math.max(best, currentScore));
      return currentScore;
    });

    setCards((prev) => shuffle(prev));
  }

  function resetGame() {
    setGameOver(false);
    setScore(0);
    setClickedCards([]);
    setCards(shuffle(cards));
  }

  return (
    <div className="container bg-gray-200 flex flex-col m-auto justify-center">
      <Header score={score} best={bestScore} handleReset={resetGame} />

      {gameOver ? (
        <div>
          <h1 className="text-4xl font-bold text-blue-500">You Win! 🎉</h1>
          <button onClick={resetGame}>Play Again</button>
        </div>
      ) : (
        <Cards cards={cards} onClick={handleCardClick} />
      )}
    </div>
  );
}

export default App;
