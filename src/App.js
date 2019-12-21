import React from 'react';
import logo from './logo512.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Huzzah to flashcards
        </h1>
        <p>
          Have some fun with your own cards. Upload notes or images and review them often!
        </p>
        <a
          className="App-link"
          href="https://css-tricks.com/almanac/properties/a/animation/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Use more Animations in your CSS!
        </a>
      </header>
    </div>
  );
}

export default App;
