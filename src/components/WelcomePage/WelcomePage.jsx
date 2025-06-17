import './WelcomePage.css';

const WelcomePage = ({ setButton }) => {
  return (
    <div className="welcome-page">
      <div className="overlay">
        <h1>Welcome to the Ultimate Gaming Hub</h1>
        <p>
          Ready to test your skills and have some serious fun?
          
        </p>
        <button className="get-started-btn" onClick={() => setButton(true)}>
        🎮 Let's Play
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
