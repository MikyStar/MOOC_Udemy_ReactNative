import { ActionType_POST } from '../actions/action-types';

export default function reducerActivePost( state = null, action )
{
	switch ( action.type )
	{
		case ActionType_POST.READ:
			return action.payload;
	}

	return state;
}