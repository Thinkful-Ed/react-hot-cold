import React from 'react';

// import "./guess-list.css";

export default function GuessList(props) {
  const guesses = props.guesses.map((guess, index) =>
  <li aria-label={`${guess}`} key={index}>
    <span className="visuallyhidden">
      Guess #{index + 1} was{" "}
    </span>   
    {guess}
  </li>
);

  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}
