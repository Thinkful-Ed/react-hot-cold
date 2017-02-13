export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
    correctAnswer: Math.round(Math.random() * 100),
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
    type: MAKE_GUESS,
    guess
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
    type: TOGGLE_INFO_MODAL
});

export const FETCH_FEWEST_GUESSES_SUCCESS = 'FETCH_FEWEST_GUESSES_SUCCESS';
export const fetchFewestGuessesSuccess = guesses => ({
    type: FETCH_FEWEST_GUESSES_SUCCESS,
    guesses
});

export const FETCH_FEWEST_GUESSES_ERROR = 'FETCH_FEWEST_GUESSES_ERROR';
export const fetchFewestGuessesError = error => ({
    type: FETCH_FEWEST_GUESSES_ERROR,
    error
});

export const fetchFewestGuesses = () => dispatch => {
    const url = '/fewest-guesses';
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => response.json())
    .then(data => dispatch(fetchFewestGuessesSuccess(data.guesses)))
    .catch(error => dispatch(fetchFewestGuessesError(error)));
};

export const SAVE_FEWEST_GUESSES_SUCCESS = 'SAVE_FEWEST_GUESSES_SUCCESS';
export const saveFewestGuessesSuccess = () => ({
    type: SAVE_FEWEST_GUESSES_SUCCESS
});

export const SAVE_FEWEST_GUESSES_ERROR = 'SAVE_FEWEST_GUESSES_ERROR';
export const saveFewestGuessesError = error => ({
    type: SAVE_FEWEST_GUESSES_ERROR,
    error
});

export const saveFewestGuesses = guesses => dispatch => {
    const url = '/fewest-guesses';
    return fetch(url, {
        method: 'post',
        body: JSON.stringify({
            guesses: guesses
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(function(response) {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => response.json())
    .then(data => dispatch(saveFewestGuessesSuccess()))
    .catch(error => dispatch(saveFewestGuessesError(error)));
};


