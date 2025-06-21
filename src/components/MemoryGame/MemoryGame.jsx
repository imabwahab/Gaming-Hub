import { useState, useEffect } from "react";
import './MemoryGame.css';

const MemoryGame = ({ backToMenu }) => {
  const initialCards = [
    { id: 1, pairId: "A" }, { id: 2, pairId: "A" },
    { id: 3, pairId: "B" }, { id: 4, pairId: "B" },
    { id: 5, pairId: "C" }, { id: 6, pairId: "C" },
    { id: 7, pairId: "D" }, { id: 8, pairId: "D" },
    { id: 9, pairId: "E" }, { id: 10, pairId: "E" },
    { id: 11, pairId: "F" }, { id: 12, pairId: "F" },
  ];

  const [cards, setCards] = useState(shuffle([...initialCards]));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [disableBoard, setDisableBoard] = useState(false);
  const allMatched = matched.length === initialCards.length;

  useEffect(() => {
    if (flipped.length === 2) {
      setDisableBoard(true);
      const [first, second] = flipped;
      if (first.pairId === second.pairId) {
        setMatched((prev) => [...prev, first.id, second.id]);
        setFlipped([]);
        setDisableBoard(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisableBoard(false);
        }, 1000);
      }
    }
  }, [flipped]);

  const handleCardClick = (card) => {
    if (disableBoard || flipped.find((c) => c.id === card.id) || matched.includes(card.id)) return;
    setFlipped((prev) => [...prev, card]);
  };

  const resetGame = () => {
    setCards(shuffle([...initialCards]));
    setFlipped([]);
    setMatched([]);
  };


  return (
    <div className="game" style={{ fontFamily: 'Numans, sans-serif' }}>
      <h2>Memory Game</h2>
      <div className="board memory-board">
        {cards.map((card) => {
          const isFlipped = flipped.find((c) => c.id === card.id) || matched.includes(card.id);
          return (
            <div
              key={card.id}
              className={`cell memory-cell ${isFlipped ? "flipped" : ""} ${matched.includes(card.id) ? "matched" : ""}`}
              onClick={() => handleCardClick(card)}
              style={{ fontFamily: 'Segoe UI, sans-serif' }}
            >
              {isFlipped ? card.pairId : "?"}
            </div>
          );
        })}
      </div>

      {allMatched && (
        <div className="congrats-message" >
          🎉 Congratulations! You have completed the level! 🎉
        </div>
      )
      }

      <div>
        <button className="reset" onClick={resetGame}>Reset Game</button>
        <button className="back" onClick={backToMenu}>Back</button>
      </div>
    </div>
  );
};

function shuffle(array) {
  let newArr = array.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export default MemoryGame;