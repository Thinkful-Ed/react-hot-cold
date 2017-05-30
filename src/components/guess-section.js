import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    return (
        <section aria-live="polite" role="status" aria-atomic="true">
            <a href="#userGuess"><h2 id="feedback" >{props.feedback}</h2></a>
            <GuessForm onGuess={props.onGuess} />
        </section>
    );
}
