import React from 'react';

import GuessForm from './guess-form';

export default function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm onGuess={props.onGuess} />
        </section>
    );
}

