import React from "react";

import GuessList from "./guess-list";
import GuessCount from "./guess-count";

import "./status-section.css";

export default function guessSection(props) {
  const guessCount = props.guesses.length;
  return (
    <section aria-labelledby="guessCount"
      aria-describedby="guessList"
    >
    <GuessCount guessCount={props.guesses.length}/>
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
