import React, { useState, useEffect } from 'react'
import './App.css'
import WelcomePage from './components/WelcomePage/WelcomePage'
import GameCards from './components/GameCards/GameCards';
import TicTacToe from './components/Tic-Tac-Toe/TicTacToe';
import background from '../src/assets/background.mp3'


function App() {

  const [button, setButton] = useState(false);
  useEffect(() => {
    const backgroundMusic = new Audio(background);
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.3;
    backgroundMusic.play().catch((e) => {
      console.warn("Autoplay blocked, try interacting with the page.");
    });
  }, [button]);

  const [game, setGame] = useState(null);

  const [menu, setmenu] = useState(false);

  let count = 1;
  const HandleMenu = () => {
    if (count % 2 !== 0) {
      setmenu(true)
    }
    count++;
    console.log(count)
  }

  const handleGameSelection = (gameName) => {
    console.log(`Game selected: ${gameName}`);
    setGame(gameName);
    setmenu(false)
  }



  return (
    <>
      {!button ? <WelcomePage setButton={setButton} /> : null}
      {button && game === null ? <GameCards handleGameSelection={handleGameSelection} /> : null}
      {menu === true ? <GameCards handleGameSelection={handleGameSelection} /> : null}

      
      {game === 'tictactoe' && menu === false && <TicTacToe backToMenu={HandleMenu} />}
    </>
  )
}

export default App



{/*git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/imabwahab/Gaming-Hub.git
git push -u origin main */}