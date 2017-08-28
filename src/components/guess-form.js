import React from 'react';

import './guess-section.css';
import './guess-form.css';

export default class GuessForm extends React.Component {

    onGuess(event) {
        event.preventDefault();

        console.log(this.props)

        if (this.props.onGuess) {
            const value = this.input.value;
            this.props.onGuess(value);
        }
        this.input.value = '';
        this.feedbackLink.focus();
    }

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <a href="#userGuess" 
                ref={feedbackLink => this.feedbackLink = feedbackLink}>
                    <h2 id="feedback" >{this.props.feedback}</h2>
                </a>
                <input type="number" name="userGuess" id="userGuess"
                    className="text" min="1" max="100" maxLength="3" autoComplete="off" aria-label="Enter a number"
                    aria-describedby="feedback" 
                    ref={input => this.input = input} required />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};
