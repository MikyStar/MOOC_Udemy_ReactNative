import _ from 'lodash'

import types from '../actions/types';

export default function( state = [], action )
{
	switch( action.type )
	{
		case types.LIKE_JOB :
			return _.uniqBy( [ action.payload, ...state ], 'jobkey' );

		default :
			return state;
	}
}