import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursePage from './components/course/CoursePage';

export default (
    <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursePage} />
        <Route component={HomePage} />
    </Switch>
);

