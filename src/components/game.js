import React from "react";

import Header from "./header";
import GuessSection from "./guess-section";
import StatusSection from "./status-section";
import InfoSection from "./info-section"

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: "Make your guess!",
      correctAnswer: Math.round(Math.random() * 100),
      gameWon: false
    };
  }

  newGame() {
    this.setState({
      guesses: [],
      feedback: "Make your guess!",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({
        feedback: "Please enter a valid number"
      });
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback, gameWon
    if (difference >= 50) {
      feedback = "You're Ice Cold...";
    } else if (difference >= 30) {
      feedback = "You're Cold...";
    } else if (difference >= 10) {
      feedback = "You're Warm";
    } else if (difference >= 1) {
      feedback = "You're Hot!";
    } else {
      gameWon = true;
      feedback = "You got it!";
    }

    this.setState({
      feedback,
      gameWon,
      guesses: [...this.state.guesses, guess],
    });

    document.title = feedback ? `${feedback} | Hot or Cold` : "Hot or Cold";
  }

  render() {
    return (
      <div>
        <Header
          onNewGame={() => this.newGame()}
        />
        <GuessSection
          feedback={this.state.feedback}
          gameWon={this.state.gameWon}
          makeGuess={guess => this.makeGuess(guess)}

        />
        <StatusSection
          count={this.state.guesses.length}
          guesses={this.state.guesses}
        />
        <InfoSection />
      </div>
    );
  }
}
