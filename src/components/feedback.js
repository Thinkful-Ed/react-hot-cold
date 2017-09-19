import React from 'react';

export default function Feedback(props) {
  /** 
   * Generate a random key so that React treats the feedback message 
   * as a DOM change, even when a guess does not change the feedback.
   * This is necessary for consistent aural feedback via aria-live.
  */
  const key = Math.random();

  let guessAgain;
  if (!props.gameWon) {
    guessAgain = <span className="visuallyhidden">Guess again!</span>;
  }
  return (
    <h2
      id="feedback"
      role="status"
      aria-live="assertive"
      aria-atomic="true"
      key={key}
    >
      {props.feedback} {guessAgain}
    </h2>
  );
}
