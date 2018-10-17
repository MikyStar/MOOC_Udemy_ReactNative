import { USER_SELECTED } from '../actions/index'

/**
 * You send me the action, if it concerns me (through the switch-case on action.type) I give you the payload which contains the user.
 * Otherwise, I'm just giving back the state as is, unchanged.
 *
 * @param {*} state Here, it's not the state of a component or container, it's the state specific to that reducer
 * @param {*} action
 */
export default function( state = null, action )
{
	switch( action.type )
	{
		case USER_SELECTED :
			return action.payload
	}

	return state;
}