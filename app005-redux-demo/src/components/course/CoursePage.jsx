import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursePage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: { Title: "" }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);

    }
    onTitleChange(event) {
        const course = this.state.course;
        course.Title = event.target.value;
        this.setState({ course: course })
    }

    onClickSave() {
        // this.props.dispatch(courseActions.createCourse(this.state.course));
        // this.props.createCourse(this.state.course);
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return (
            <div key={index}>
                {course.Title}
            </div>
        );
    }
    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.Title} />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

CoursePage.propTypes = {
    courses: PropTypes.array.isRequired,
    //dispatch: PropTypes.func.isRequired,
    //createCourse: PropTypes.func.isRequired
    actions: PropTypes.object.isRequired
}


function mapStateToProps(state, ownProps) {

    return {
        courses: state.courses // courses is the reducer alias
        // here you can set what reducer will couse a component refresh
    };
}

// when this function is not defined, by default the funciont dispatch is exposed in props
function mapDispatchToProps(dispatch) {
    return {
        //  createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);

