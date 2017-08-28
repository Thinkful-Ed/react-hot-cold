import React from 'react';

import './guess-count.css';
import './guess-list.css';

export default function guessSection(props) {
    const guesses = props.guesses.map((guess, index) => (
        <li aria-label={`${guess}`} key={index}>
            <span className="visually-hidden">Guess #{index + 1} was </span>{guess}
        </li>
    ));
    return (
        <div>
            <p>
                Guess #<span id="count">{props.count}</span>!
            </p>
            <ul  id="guessList" className="guessBox clearfix">
                {guesses}
            </ul>
        </div>
    )
}


