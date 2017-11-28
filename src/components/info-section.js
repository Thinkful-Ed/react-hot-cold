import React from 'react';

import './info-section.css';

export default function InfoSection(props) {
  return (
    <section id="what" tabIndex="-1">
      <h2>What do I do?</h2>
      <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
      <ol>
        <li>I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
        <li>You need to <strong>guess</strong> until you can find the hidden secret number.</li>
        <li>You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
      </ol>
      <p>If you're using a screen reader, you can use the visually hidden "Hear state of game" link in the navigation region to get a reminder of all your past guesses and how close your current guess is to being correct.</p>
    </section>
  );
}
