import React from "react";

import GuessList from "./guess-list";
import GuessCount from "./guess-count";
import AuralStatus from "./aural-status";

import "./status-section.css";

export default function guessSection(props) {
  const { guesses, statusText } = props;
  const guessCount = guesses.length;
  
  return (
    <section aria-labelledby="guessCount"
      aria-describedby="guessList"
    >
      <GuessCount guessCount={guessCount}/>
      <GuessList guesses={guesses}/>
      <AuralStatus statusText={statusText}/>
    </section>
  );
}
