import actionTypes from './types'

export const employeeUpdate = ( { prop, value } ) =>
{
	return 	{
				type : actionTypes.EMPLOYEE_UPDATE,
				payload : { prop, value }
			};
}