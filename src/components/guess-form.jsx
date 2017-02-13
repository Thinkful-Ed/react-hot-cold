import React from 'react';
import {connect} from 'react-redux';

import {makeGuess, saveFewestGuesses, fetchFewestGuesses} from '../actions';

export class GuessForm extends React.Component {
    submitGuess(event) {
        event.preventDefault();
        const value = this.input.value;
        this.props.dispatch(makeGuess(value));

        if (parseInt(value, 10) === this.props.correctAnswer &&
            (!this.props.fewestGuesses ||
             this.props.guessCount < this.props.fewestGuesses)) {
            const guesses = this.props.guessCount + 1;
            this.props.dispatch(
                saveFewestGuesses(guesses)
            ).then(() => {
                return this.props.dispatch(
                    fetchFewestGuesses()
                );
            });
        }
    }

    render() {
        return (
            <form onSubmit={e => this.submitGuess(e)}>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

const mapStateToProps = state => ({
    guessCount: state.guesses.length,
    fewestGuesses: state.fewestGuesses,
    correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(GuessForm);
