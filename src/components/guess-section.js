import React from 'react';
import GuessForm from './guess-form';



export default function GuessSection(props) {
    return (
        <section>
            
            <GuessForm onGuess={props.onGuess} />
        </section>
    );
}
