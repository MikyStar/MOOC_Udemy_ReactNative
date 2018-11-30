import { combineReducers } from 'redux';

import auth from './auth-reducer'
import jobs from './jobs-reducer'
import likedJobs from './likes-reducer'

export default combineReducers(
{
	auth,
	jobs,
	likedJobs
});