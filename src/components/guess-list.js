import React from 'react';

import './guess-list.css';

export default function GuessList(props) {
  const guessesHTML = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

  return (
    <ul id="guessList" className="guessBox clearfix">
      {guessesHTML}
    </ul>
  );
}
