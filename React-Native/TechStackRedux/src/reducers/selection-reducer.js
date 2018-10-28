// state = null so it's not undefined, otherwiwe Redux is not gonna like it
export default ( state = null, action ) =>
{
	switch( action.type )
	{
		case 'select-library' :
			return action.payload;

		default :
			return state; // ! IMPORTANT -> NEVER FORGET
	}
};