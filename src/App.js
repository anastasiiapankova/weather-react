import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="contanier">
        <Weather defaultCity="Tyrol" />
        <footer>
          <a
            href="https://github.com/anastasiiapankova/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sours code
          </a>
          , by Anastasiia Pankova and hosted on
          <a
            href="https://jocular-horse-47f841.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
