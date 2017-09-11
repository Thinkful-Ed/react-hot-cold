import React from "react";

import "./status-section.css";

export default function guessSection(props) {
  console.log(props.auralUpdate)
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
      className="visually-hidden"
      aria-live="assertive"
      aria-atomic="true"
      >
        <p> {props.auralUpdate}</p>
      </div>
    </section>
  );
}
