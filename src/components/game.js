import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import InfoModal from './info-modal';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.round(Math.random() * 100),
            showInfoModal: false
        };
    }

    newGame() {
        this.setState({
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.round(Math.random() * 100)
        });
    }

    guess(guess) {
        guess = parseInt(guess, 10);
        if (isNaN(guess)) {
            this.setState({
                feedback: 'Please enter a valid number'
            });
            return;
        }

        const difference = Math.abs(guess - this.state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        this.setState({
            feedback,
            guesses: [...this.state.guesses, guess]
        });

        document.title = (feedback) ? `${feedback} | Hot or Cold` : 'Hot or Cold';
    }

    onToggleInfoModal = () => {
      this.setState({
          showInfoModal: !this.state.showInfoModal
      });
    }

    render() {
        return (
            <div>
                <InfoModal hidden={!this.state.showInfoModal} aria-hidden={!this.state.showInfoModal} onClose={() => this.onToggleInfoModal()} />
                <div aria-hidden={this.state.showInfoModal}>
                  <Header onNewGame={() => this.newGame()} toggleInfoModal={this.onToggleInfoModal} />
                  <GuessSection feedback={this.state.feedback}
                      onGuess={(guess) => this.guess(guess)} />
                  <GuessCount count={this.state.guesses.length} />
                  <GuessList guesses={this.state.guesses} />
                </div>

            </div>
        );
    }
}

