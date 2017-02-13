import React from 'react';
import {connect} from 'react-redux';

import {fetchFewestGuesses} from'../actions';

export class FewestGuesses extends React.Component {
    componentDidMount() {
        this.props.dispatch(
            fetchFewestGuesses()
        );
    }

    render() {
        return (
            <p>
                Fewest Guesses: <span id="count">{this.props.fewestGuesses || 'N/A'}</span>
            </p>
        );
    }
}

const mapStateToProps = state => ({
    fewestGuesses: state.fewestGuesses
});

export default connect(mapStateToProps)(FewestGuesses);

