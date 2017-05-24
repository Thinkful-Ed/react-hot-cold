import React from 'react';

import './guess-count.css';

export default function GuessCount(props) {
    return (
        <p role="status" aria-live="polite" aria-atomic="true">
            Guess #<span id="count">{props.count}</span>!
        </p>
    );
}
