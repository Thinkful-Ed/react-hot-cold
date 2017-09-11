import React from "react";

import "./top-nav.css";

export default function TopNav(props) {
    return (
      <nav>
        <ul className="clearfix">
          <li>
            <a
              className="what"
              aria-label="How to play"
              href="#what"
            >
              What?
            </a>
          </li>
          <li>
            <a
              className="new"
              aria-label="Start a new game"
              href="#feedback"
              onClick={props.onRestartGame}
            >
              + New Game
            </a>
          </li>
          <li>
            <a
            href="#get-status"
            onClick={props.onGenerateAuralUpdate}
            >
              Hear state of game
            </a>
          </li>
        </ul>
      </nav>
    );
  }
