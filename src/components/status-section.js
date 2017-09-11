import React from "react";

import "./status-section.css";

export default function guessSection(props) {
  const guesses = props.guesses.map((guess, index) =>
    <li aria-label={`${guess}`} key={index}>
      <span className="visually-hidden">
        Guess #{index + 1} was{" "}
      </span>   
      {guess}
    </li>
  );
  const guessCount = props.guesses.length;
 
  console.log(props.guesses.join(', '))
  return (
    <section role="region"
      aria-labelledby="guessCount"
      aria-describedby="guessList"
    >
    <h2 id="guessCount">
      You've made <span id="count">{guessCount}</span> guesses!
    </h2>
      <ul id="guessList" className="guessBox clearfix">
        {guesses}
      </ul>
      <div 
      id="status-readout"
      className=""
      aria-live="assertive"
      aria-atomic="true"
      hidden={!props.readStatus}>
        <p>Here's the status of the game right now: {props.feedback} You've made {guessCount} guesses. In order of most- to least-recent, they are: {props.guesses.join(', ')}
        </p>
      </div>
    </section>
  );
}
