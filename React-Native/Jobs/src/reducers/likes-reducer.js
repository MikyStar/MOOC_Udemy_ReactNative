import _ from 'lodash';
import { PERSIST_REHYDRATE } from 'redux-persist/lib/constants';
import types from '../actions/types';

export default function ( state = [], action )
{
	switch ( action.type )
	{
		case PERSIST_REHYDRATE:
			return action.payload.likedJobs || [];

		case types.LIKE_JOB :
			return _.uniqBy( [
				action.payload, ...state
			], 'jobkey' );
		case types.CLEAR_LIKED_JOBS:
			return [];
		default:
			return state;
	}
}