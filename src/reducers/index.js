import {combineReducers} from 'redux';
import ClientsReducers from './clients';
import CurrentClient from './current';

const allReducers = combineReducers({
	clients: ClientsReducers,
	current: CurrentClient
});

export default allReducers;