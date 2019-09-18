import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import routes from './routes';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import { loadCourses } from './actions/courseActions';

const store = configureStore();
 
store.dispatch(loadCourses());
 
render(
    <Provider store={store}>
        <Router>
            <App children={routes} />
        </Router>
    </Provider>,
    document.getElementById('app')
);

registerServiceWorker();
