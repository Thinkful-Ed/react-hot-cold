import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
  const { gameWon, feedback } = props;
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback gameWon={gameWon} feedback={feedback} />
      <GuessForm onMakeGuess={guess => this.onMakeGuess(guess)} />
    </section>
  );
}
