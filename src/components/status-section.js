import React from "react";

import GuessList from "./guess-list";
import GuessCount from "./guess-count";
import AuralStatus from "./aural-status";

import "./status-section.css";

export default function guessSection(props) {
  const guessCount = props.guesses.length;
  return (
    <section aria-labelledby="guessCount"
      aria-describedby="guessList"
    >
    <GuessCount guessCount={props.guesses.length}/>
    <GuessList guesses={props.guesses}/>
    <AuralStatus statusText={props.statusText}/>
    </section>
  );
}
