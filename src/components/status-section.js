import React from 'react';

import GuessCount  from './guess-count';
import GuessList from './guess-list';

import './guess-count.css';
import './guess-list.css';

export default function guessSection(props) {
    return (
        <div>
            <GuessCount count={props.count}/>
            <GuessList guesses={props.guesses}/>
        </div>
    )
}


