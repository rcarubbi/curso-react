import { combineReducers } from 'redux';
import cabecalhoReducer from './Components/Cabecalho/reducer';

export default combineReducers({
	pesquisaData: cabecalhoReducer,
});
