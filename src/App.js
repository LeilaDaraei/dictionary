import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";
import Typewriter from "typewriter-effect";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            <Typewriter
              options={{
                strings: ["Pic", "Dicstio", "Dictionary App"],
                autoStart: true,
                loop: true,
                delay: 200,
                pauseFor: 300,
                changeDeleteSpeed: 200,
              }}
            />
          </h1>
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
