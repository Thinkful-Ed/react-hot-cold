import React from "react";

import GuessList from "./guess-list";

import "./status-section.css";

export default function guessSection(props) {
  const guessCount = props.guesses.length;
  return (
    <section aria-labelledby="guessCount"
      aria-describedby="guessList"
    >
    <h2 id="guessCount">
      You've made <span id="count">{guessCount}</span> guesses!
    </h2>
    <GuessList guesses={props.guesses}/>
      <div 
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
      >
        <p> {props.auralUpdate}</p>
      </div>
    </section>
  );
}
