import { combineReducers } from 'redux';

import ReducerPost from './posts-reducer';
import ReducerActivePost from './active-post-reducer';
import { reducer as ReducerForm } from "redux-form"

const rootReducer = combineReducers(
{
	posts : ReducerPost,
	activePost : ReducerActivePost,
	form : ReducerForm
});

export default rootReducer;
