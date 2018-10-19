import { combineReducers } from 'redux';

import ReducerPost from './posts-reducer';
import ReducerActivePost from './active-post-reducer';

const rootReducer = combineReducers(
{
	posts : ReducerPost,
	activePost : ReducerActivePost
});

export default rootReducer;
