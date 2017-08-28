import React from 'react';

import './guess-section.css';
import './guess-form.css';

export default class GuessSection extends React.Component {

    onGuess(event) {
        event.preventDefault();

        console.log(this.props)

        if (this.props.onGuess) {
            const value = this.input.value;
            this.props.onGuess(value);
        }
        this.input.value = '';
        this.feedback.focus();
    }

    render() {
        return (
                <section role="region" aria-label="Guess section" aria-describedby="feedback">
                    <h2 id="feedback" 
            ref={feedback => this.feedback = feedback}>{this.props.feedback}</h2>
            <form onSubmit={e => this.onGuess(e)}>
                
                <input type="number" name="userGuess" id="userGuess"
                    className="text" min="1" max="100" maxLength="3" autoComplete="off" aria-label="Enter a number"
                    aria-describedby="feedback" 
                    ref={input => this.input = input} required />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
                </section>
        );
    }
};
