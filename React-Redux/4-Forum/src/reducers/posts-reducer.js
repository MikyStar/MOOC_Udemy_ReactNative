import { ActionType_POST } from '../actions/action-types';

export default function reducerPost( state = [], action )
{
	switch( action.type )
	{
		case ActionType_POST.READ_ALL :
			return action.payload;

		case ActionType_POST.DELETE :
			return state.filter( post =>
			{
				return !(post.id == action.payload) // Suppress the one that have the same id as the payload because we precised in the index of actions that for delete we will send the id through the payload
			})
	}

	return state;
}