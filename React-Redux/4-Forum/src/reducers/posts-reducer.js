import { ActionType_POST } from '../actions/action-types';

export default function reducerPost( state = [], action )
{
	switch( action.type )
	{
		case ActionType_POST.READ_ALL :
			return action.payload;
	}

	return state; 
}