import Loader from './components/Loader';
import Load from './assets/loader.PNG'

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
      
      <img
        src={Load}
        alt="App Logo"
        style={{
          maxWidth: "300px",
          height: "auto",
          marginTop: "20px",
        }}
      />

      
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginTop: "10px",
        }}
      >
        TESTING APP
      </h1>

      
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <Loader />
      </div>
    </div>
  );
};

export default App;
