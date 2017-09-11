import React from "react";

import Feedback from "./feedback";
import GuessForm from "./guess-form";

import "./guess-section.css";

export default function GuessSection(props){
  let {onMakeGuess, ...gameState} = props;
  return (
    <section aria-label="Guess section"
    aria-describedby="feedback"
    >
      <Feedback {...gameState}/>
      <GuessForm onMakeGuess={guess => onMakeGuess(guess)}/>
    </section>
  );
}
