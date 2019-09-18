import actionTypes from './actionTypes';

export function createCourse(course) {
    return { type: actionTypes.CREATE_COURSE, course };
}

export function loadCoursesSuccces(courses) {
    return { type: actionTypes.LOAD_COURSES, courses };
}

export function loadCourses() {
    return function(dispatch) {
        return fetch("http://localhost:55486/api/course").then(resp => {
            resp.json().then(courses => dispatch(loadCoursesSuccces(courses)));
        }).catch(err => {
            throw (err);
        });
    };
}