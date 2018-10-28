import { combineReducers } from 'redux';

import LibraryReducer from "./library-reducer"

export default combineReducers(
{
	libraries : LibraryReducer
});