import React from "react";

import "./top-nav.css";

export default class TopNav extends React.Component {
  onNewGame(event) {
    if (this.props.onNewGame) {
      this.props.onNewGame();
    }
  }

  render() {
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
              onClick={e => this.onNewGame(e)}
            >
              + New Game
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
