import types from '../actions/types';

const INITIAL_STATE =
{
	results : []
}

export default function( state = INITIAL_STATE, action )
{
	switch( action.type )
	{
		case types.FETCH_JOBS :
			return action.payload;

		default :
			return state;
	}
}