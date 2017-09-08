import React from "react";
import GuessForm from "./guess-form";

import "./guess-section.css";

export default class GuessSection extends React.Component {

  render() {
    return (
      <section role="region"
        aria-label="Guess section"
        aria-describedby="feedback"
      >
        <h2 id="feedback" 
        ref={feedback => (this.feedback = feedback)}>
          {this.props.feedback}
        </h2>
        <GuessForm makeGuess={guess => this.props.makeGuess(guess)}/>
      </section>
    );
  }
}
