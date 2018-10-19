import { combineReducers } from 'redux';

import ReducerPost from './posts-reducer';

const rootReducer = combineReducers(
{
	posts : ReducerPost
});

export default rootReducer;
