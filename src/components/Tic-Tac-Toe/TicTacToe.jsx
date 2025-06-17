import React, { useState, useEffect } from "react";
import "./TicTacToe.css";

import winnermusic from '../../assets/winner.mp3'

const TicTacToe = ({ backToMenu }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winnerLine, setWinnerLine] = useState([]);
  const [score, setScore] = useState({ X: 0, O: 0, Draw: 0 });

  const [hasPlayedWinnerSound, setHasPlayedWinnerSound] = useState(false);

  const winner = calculateWinner(board);

  // Play winner sound
  useEffect(() => {
    if (winner && !hasPlayedWinnerSound) {
      const winSound = new Audio(winnermusic);
      winSound.play();
      setHasPlayedWinnerSound(true);
    }
  }, [winner, hasPlayedWinnerSound]);


  const status = winner
    ? `🎉 Winner: ${winner.symbol}`
    : board.every(Boolean)
      ? "It's a draw!"
      : `Next Player: ${xIsNext ? "X" : "O"}`;

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinnerLine([]);
    setHasPlayedWinnerSound(false);
  };

  if (winner && winnerLine.length === 0) {
    setWinnerLine(winner.line);
    setScore((prev) => ({
      ...prev,
      [winner.symbol]: prev[winner.symbol] + 1,
    }));
  }

  return (
    <div className="game">
      <h2>Tic Tac Toe</h2>
      <div className="scoreboard">
        <span>X: {score.X}</span>
        <span>O: {score.O}</span>
      </div>
      <div className="status">{status}</div>
      <div className="board">
        {board.map((cell, i) => (
          <div
            key={i}
            className={`cell ${winnerLine.includes(i) ? "winner-cell" : ""}`}
            onClick={() => handleClick(i)}
          >
            {cell}
          </div>
        ))}
      </div>
      <div>
        <button className="reset" onClick={resetGame}>
          Reset Game
        </button>
        <button className="back" onClick={() => backToMenu(true)}>
          Back to Menu
        </button>
      </div>
    </div>
  );
};


function calculateWinner(cells) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return { symbol: cells[a], line };
    }
  }
  return null;
}

export default TicTacToe;

//window.location.reload()