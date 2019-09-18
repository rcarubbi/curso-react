import { combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses // this alias will be exposed at state in the component 
});

export default rootReducer;