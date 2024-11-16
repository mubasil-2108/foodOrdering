import './App.css';
import MainPage from './components/mainPage/page';
import React, { useState, useEffect } from 'react';
import AllRoutes from './routes/page';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
      <AllRoutes windowSize={windowSize}/>
  );
}

export default App;
