import { useState, useEffect } from 'react';
import './App.css';
import initialGif from './assets/initial.png';
import gif1 from './assets/1.gif';
import gif2 from './assets/2.gif';
import gif3 from './assets/3.gif';
import gif4 from './assets/4.gif';
import gif5 from './assets/5.gif';

function App() {
  const [fadeIn, setFadeIn] = useState(false);
  const [currentGif, setCurrentGif] = useState(initialGif);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const gifOptions = [gif1, gif2, gif3, gif4, gif5];

  const handleGifClick = () => {
    const randomGif = gifOptions[Math.floor(Math.random() * gifOptions.length)];
    setCurrentGif(randomGif);
  };

  return (
    <div className={`app-container ${fadeIn ? "fade-in" : ""}`}>
      <div className="background-layer"></div>
      <div className="content">
      <div className="floating-text" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
  {/* <h3>hii</h3> */}
  <img
    src={currentGif}
    className="clickable-gif"
    onClick={handleGifClick}
    alt="GIF"
  />
</div>

      </div>
    </div>
  );
}

export default App;
