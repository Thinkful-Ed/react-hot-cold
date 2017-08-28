import React from 'react';
import Modal from 'react-modal';

import './info-modal.css';

Modal.setAppElement('#root');

export default class InfoModal extends React.Component {
    onClose(event) {
        if (this.props.onRequestClose) {
            this.props.onRequestClose();
        }
    }

    render() {
        return (
            <Modal {...this.props}>
                <h3 ref={heading => this.heading = heading}>What do I do?</h3>
                <div>
                    <p id="game-goes-like-this">This is a Hot or Cold Number Guessing Game. The game goes like&nbsp;this:</p>
                    <ol>
                        <li>I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
                        <li>You need to <strong>guess</strong> until you can find the hidden secret number.</li>
                        <li>You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
                    </ol>
                    <p>So, Are you ready?</p>
                    <button className="close" 
                        ref={button => this.closeBtn = button} 
                        onClick={e => this.onClose(e)}
                    > Got It! </button>
                </div>
                </Modal>
        );
    }
}
