import React, { useState } from 'react';
import './RockPaperScissor.css';

function RockPaperScissor({ backToMenu }) {
  const [playerMove, setPlayerMove] = useState(null);
  const [computerMove, setComputerMove] = useState(null);
  const [result, setResult] = useState(null);
  const [winCount, setWinCount] = useState(0);
  const [lossCount, setLossCount] = useState(0);
  const [tieCount, setTieCount] = useState(0);

  const getComputerMove = () => {
    const value = Math.random() * 100;
    if (value <= 33) return 'rock';
    else if (value <= 67) return 'paper';
    else return 'scissors';
  };

  const playGame = (playerChoice) => {
    const computerChoice = getComputerMove();

    setPlayerMove(playerChoice);
    setComputerMove(computerChoice);

    if (playerChoice === computerChoice) {
      setResult('Tie');
      setTieCount(tieCount + 1);
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('Win');
      setWinCount(winCount + 1);
    } else {
      setResult('Lose');
      setLossCount(lossCount + 1);
    }
  };

  const resetGame = () => {
    setPlayerMove(null);
    setComputerMove(null);
    setResult(null);
    setWinCount(0);
    setLossCount(0);
    setTieCount(0);
  };

  return (
    <div className="game">
      <h2>Rock Paper Scissors</h2>

      <div className="scoreboard">
        <div>Wins: {winCount}</div>
        <div>Losses: {lossCount}</div>
        <div>Ties: {tieCount}</div>
      </div>

      <div className="status">
        <p><strong>Player:</strong> {playerMove ?? '-'}</p>
        <p><strong>Computer:</strong> {computerMove ?? '-'}</p>
        <p><strong>Result:</strong> {result ?? '-'}</p>
      </div>

      <div className="board">
        <div className="cell" onClick={() => playGame('rock')}>🪨</div>
        <div className="cell" onClick={() => playGame('paper')}>📄</div>
        <div className="cell" onClick={() => playGame('scissors')}>✂️</div>
      </div>

      <div>
        <button className="reset" onClick={resetGame}>Reset</button>
        <button className="back" onClick={backToMenu}>Back</button>
      </div>
    </div>
  );
}

export default RockPaperScissor;
