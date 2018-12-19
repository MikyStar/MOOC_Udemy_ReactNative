import _ from 'lodash'

import types from '../actions/types';
import { TouchableOpacity } from 'react-native';

export default function( state = [], action )
{
	switch( action.type )
	{
		case types.LIKE_JOB :
			return _.uniqBy( [ action.payload, ...state ], 'jobkey' );

		case types.CLEAR_LIKED_JOBS :
			return [];

		default :
			return state;
	}
}