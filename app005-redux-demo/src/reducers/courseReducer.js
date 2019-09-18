import actionTypes from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.CREATE_COURSE:
            return [...state,
                Object.assign({}, action.course) 
            ];
        case actionTypes.LOAD_COURSES:
            return action.courses;
        default:
            return state;
    }
}