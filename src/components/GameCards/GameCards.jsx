import './GameCards.css'; 

const GameCards = ({handleGameSelection}) => {
  
  return (
    <>
      <div className="game-cards-container">

        <div className="game-card" >
          <h2>Tic Tac Toe</h2>
          <p>Play the classic X and O game!</p>
          <button onClick={() => handleGameSelection('tictactoe')}>Play Now</button>
        </div>

        <div className="game-card" >
          <h2>Rock Paper Scissors</h2>
          <p>Test your luck and strategy!</p>
          <button onClick={() => handleGameSelection('rockpaperscissor')}>Play Now</button>
        </div>

        <div className="game-card" >
          <h2>Memory Match</h2>
          <p>Flip cards and test your memory!</p>
          <button >Play Now</button>
        </div>

        <div className="game-card" >
          <h2>Guess the Number</h2>
          <p>Try to guess the number in the fewest tries!</p>
          <button >Play Now</button>
        </div>
      </div>

      
    </>
  );
};

export default GameCards;
