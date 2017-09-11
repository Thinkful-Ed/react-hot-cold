import React from "react";

export default function Feedback(props) {
    return (
        <h2 id="feedback"
        role="status"
        aria-live="assertive"
        aria-atomic="true">
          {props.feedback} {!props.gameWon ? <span className="visually-hidden">Guess again!</span>: ''}
        </h2>
    )
}