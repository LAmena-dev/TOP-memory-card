import { useState, useEffect } from "react";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=4");
        const data = await res.json();

        const details = await Promise.all(
          data.results.map(async (entity) => {
            const res = await fetch(entity.url);
            return res.json();
          })
        );

        setCards(shuffle(details));
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
    } else {
      const currentScore = score + 1;
      setScore(currentScore);
      setClickedCards([...clickedCards, id]);

      if (currentScore > bestScore) setBestScore(currentScore);
      winCheck();
    }

    setCards(shuffle(cards));
  }

  function winCheck() {
    if (clickedCards.length === cards.length) setGameOver(true);
    return;
  }

  function resetGame() {
    setGameOver(false);
    setScore(0);
    setClickedCards([]);
    setCards(shuffle(cards));
  }

  return (
    <>
      <Header score={score} best={bestScore} />
      {gameOver ? (
        <div>
          <h1>You Win!</h1>
          <button onClick={resetGame}>Play Again</button>
        </div>
      ) : (
        <Cards cards={cards} onClick={handleCardClick} />
      )}
    </>
  );
}

export default App;
