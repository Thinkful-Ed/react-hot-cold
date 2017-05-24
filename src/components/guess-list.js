import React from 'react';

import './guess-list.css';

export default function GuessList(props) {
    const guesses = props.guesses.map((guess, index) => (
        <li aria-label={`${guess}`} key={index}>
            <span className="visually-hidden">Guess #{index + 1} was </span>{guess}
        </li>
    ));

    return (
        <ul role="status" aria-live="polite" aria-atomic="true" id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
    );
};
