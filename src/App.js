import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          Coded by Leila Daraei and is{" "}
          <a href="https://github.com/LeilaDaraei/dictionary">
            open-sourced on GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
