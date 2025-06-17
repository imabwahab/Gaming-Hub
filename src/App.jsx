import React, { useState, useEffect } from 'react'
import './App.css'
import WelcomePage from './components/WelcomePage/WelcomePage'


function App() {
  
  const [button, setButton] = useState(false);

  return (
    <>
      {!button ? <WelcomePage setButton={setButton} /> : null}
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