import React from 'react';

import './top-nav.css';

export default class TopNav extends React.Component {
    onNewGame(event) {
        if (this.props.onNewGame) {
            this.props.onNewGame();
        }
    }

    onInfo(event) {
        event.preventDefault();
        if (this.props.onInfo) {
            this.props.onInfo();
        }
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" aria-label="How to play" href="#modal" onClick={e => this.onInfo(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" aria-live="Start a new game" href="#feedback" onClick={e => this.onNewGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};
