import React from "react";

import Header from "./header";
import GuessSection from "./guess-section";
import StatusSection from "./status-section";
import InfoModal from "./info-modal";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: "Make your guess!",
      correctAnswer: Math.round(Math.random() * 100),
      modalIsOpen: false
    };
  }

  newGame() {
    this.setState({
      guesses: [],
      feedback: "Make your guess!",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  guess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({
        feedback: "Please enter a valid number"
      });
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = "You're Ice Cold...";
    } else if (difference >= 30) {
      feedback = "You're Cold...";
    } else if (difference >= 10) {
      feedback = "You're Warm";
    } else if (difference >= 1) {
      feedback = "You're Hot!";
    } else {
      feedback = "You got it!";
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });

    document.title = feedback ? `${feedback} | Hot or Cold` : "Hot or Cold";
  }

  toggleInfoModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  };

  render() {
    return (
      <div>
        <InfoModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.toggleInfoModal}
          contentLabel="What do I do?"
        />
        <Header
          onNewGame={() => this.newGame()}
          toggleInfoModal={this.toggleInfoModal}
        />
        <GuessSection
          feedback={this.state.feedback}
          onGuess={guess => this.guess(guess)}
        />
        <StatusSection
          count={this.state.guesses.length}
          guesses={this.state.guesses}
        />
      </div>
    );
  }
}
