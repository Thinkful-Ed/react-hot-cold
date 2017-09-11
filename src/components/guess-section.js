import React from "react";

import Feedback from "./feedback";
import GuessForm from "./guess-form";

import "./guess-section.css";

export default function GuessSection(props){
  return (
    <section role="region"
      aria-label="Guess section"
      aria-describedby="feedback"
    >
      <Feedback feedback={props.feedback}/>
      <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)}/>
    </section>
  );
}
