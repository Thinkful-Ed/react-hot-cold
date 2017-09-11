import React from "react";

import Feedback from "./feedback";
import GuessForm from "./guess-form";

import "./guess-section.css";

export default class GuessSection extends React.Component {

  render() {
    return (
      <section role="region"
        aria-label="Guess section"
        aria-describedby="feedback"
      >
        <Feedback feedback={this.props.feedback}/>
        <GuessForm makeGuess={guess => this.props.makeGuess(guess)}/>
      </section>
    );
  }
}
