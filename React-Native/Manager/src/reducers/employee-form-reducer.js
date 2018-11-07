import actionTypes from '../actions/types'

const INITIAL_STATE =
{
	name : '',
	phone : '',
	shift : ''
};

export default ( state = INITIAL_STATE, action ) =>
{
	switch( action.type )
	{
		case actionTypes.EMPLOYEE_UPDATE :
			// example : action.payload === { prop : 'name', value : 'jack }
			return { ...state, [ action.payload.prop ] : action.payload.value } // ! It's not an array, it's key interpolation that is decided at runtime just like with `` and ${}

		case actionTypes.EMPLOYEE_CREATE :
			return INITIAL_STATE; // To reset the values of the form

		default :
			return state;
	}
}