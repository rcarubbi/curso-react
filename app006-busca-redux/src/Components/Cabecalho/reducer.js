import * as actionTypes from './actionTypes';

const initialState = () => ({
	results: [],
	term: '',
});

export default (state = initialState(), action) => {
	switch (action.type) {
		case actionTypes.SEARCH:
			return {
				...state,
				results: [...action.payload.results],
				term: [...action.payload.term],
			};
		case actionTypes.CLEAR:
			return {
				...state,
				...initialState(),
			};
		default:
			return state;
	}
};
