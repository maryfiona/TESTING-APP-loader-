import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Load from './assets/loader.PNG';

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenWidth <= 600;

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isMobile ? "20px 10px" : "40px 20px",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <img
        src={Load}
        alt="App Logo"
        style={{
          maxWidth: isMobile ? "300px" : "300px",
          height: "auto",
          marginTop: isMobile ? "10px" : "20px",
        }}
      />

      <h1
        style={{
          fontSize: isMobile ? "1.8rem" : "2.5rem",
          fontWeight: "bold",
          letterSpacing: isMobile ? "0.1em" : "0.2em",
          textTransform: "uppercase",
          
        }}
      >
        TESTING APP
      </h1>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
       
        }}
      >
        <Loader />
      </div>
    </div>
  );
};

export default App;
