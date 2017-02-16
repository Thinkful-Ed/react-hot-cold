import React from 'react';

export default function GuessCount(props) {
    return (
        <p>
            Guess #<span id="count">{props.count}</span>!
        </p>
    );
}
