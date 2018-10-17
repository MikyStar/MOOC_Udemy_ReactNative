import { combineReducers } from 'redux';

import UsersReducer from './reducer_users'
import ActiveUserReducer from './reduce-activeUser'

const rootReducer = combineReducers(
{
	users : UsersReducer,
	activeUser : ActiveUserReducer
});

export default rootReducer;
