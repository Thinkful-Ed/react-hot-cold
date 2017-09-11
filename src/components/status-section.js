import React from "react";

import "./guess-count.css";
import "./guess-list.css";

export default function guessSection(props) {
  const guesses = props.guesses.map((guess, index) =>
    <li aria-label={`${guess}`} key={index}>
      <span className="visually-hidden">
        Guess #{index + 1} was{" "}
      </span>   
      {guess}
    </li>
  );
 
  return (
    <section role="region"
      aria-labelledby="guessCount"
      aria-describedby="guessList"
    >
    <h2 id="guessCount">
      You've made <span id="count">{props.count}</span> guesses!
    </h2>
      <ul id="guessList" className="guessBox clearfix">
        {guesses}
      </ul>
      <div 
      id="status-readout"
      className=""
      hidden>
        Test
      </div>
    </section>
  );
}
