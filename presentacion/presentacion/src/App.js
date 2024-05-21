import React from 'react';
import "./App.css";
import Confetti from "./Confetti";

const App = () => {
  // URL del GIF
  const gifUrl = "https://i.pinimg.com/originals/07/7a/8a/077a8af0c34f0208d97abe96b6a0ebdc.gif";

  return (
    <div className="App">
      <Confetti />
      <header className="App-header">
        <h1 style={{ marginBottom: "0px" }}>Demostración</h1>
        <p style={{ marginTop: "10px", marginBottom: "50px" }}>
        </p>
        <div id="gifContainer">
          <img src={gifUrl} />
        </div>
      </header>
    </div>
  );
};

export default App;
