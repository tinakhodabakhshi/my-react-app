import React from "react";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent text="Clicca qui" />
        <ImageComponent
          src="https://media.istockphoto.com/id/1219431469/it/foto/ragazzo-che-gioca-sul-cellulare-sul-divano.jpg?s=612x612&w=0&k=20&c=m00JLeEW_pmgTSicNyue-Og7PP-E_FYNKaqZiu8QqIY="
          alt=""
        />
      </header>
    </div>
  );
}

export default App;
