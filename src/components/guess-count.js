import React from 'react';

import './guess-count.css';

export default function GuessCount(props) {
  return (
    <h2 id="guessCount">
      You&apos;ve made <span id="count">{props.guessCount}</span> guesses!
    </h2>
  );
}
