import * as actionTypes from './actionTypes';

export function returnUsers(term, results) {
	return { type: actionTypes.SEARCH, payload: { results, term } };
}
export function clear() {
	return { type: actionTypes.CLEAR };
}

export function search(term) {
	return dispatch => {
		return fetch(`https://jsonplaceholder.typicode.com/todos/`)
			.then(resp => {
				resp
					.json()
					.then(results => dispatch(returnUsers(term, filter(term, results))));
			})
			.catch(err => {
				throw err;
			});
	};
}

function filter(term, results) {
	return results.filter(u => u.title.includes(term));
}
