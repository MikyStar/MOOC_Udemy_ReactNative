import Firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import actionTypes from './types'

export const employeeUpdate = ( { prop, value } ) =>
{
	return 	{
				type : actionTypes.EMPLOYEE_UPDATE,
				payload : { prop, value }
			};
}

export const employeeCreate = ( { name, phone, shift } ) =>
{
	const { currentUser } = Firebase.auth();

	return ( dispatch ) => //We pretend to use ReduxThunk because async but we don't need to get back a response so here we are
	{
		/* '/users/userId/employees' it's the path to where employees are stored in the database -> think about how we store 	data ->
			{
				"users" :
				{
					"userId" :
					{
						"employees" : !!! Here !!!!!
						{
							"employeeId" :
							{
								"name", "phone", "shift"
							}
						}
					}
				}
			}
		*/
		Firebase.database().ref( `/users/${ currentUser.uid }/employees` )
			.push( { name, phone, shift } )
			.then( () =>
			{
				dispatch( { type : actionTypes.EMPLOYEE_CREATE } )
				Actions.pop() // pop makes us go back to previous screen
			})
	}
};

export const employeesFetch = () =>
{
	return ( dispatch ) =>
	{
		const { currentUser } = Firebase.auth();

		// Whenever a new value is available on the Firebase server, we fetch it through 'snapshot' with the action
		Firebase.database().ref( `/users/${ currentUser.uid }/employees`)
			.on( 'value', snapshot =>
			{
				dispatch( { type : actionTypes.EMPLOYEES_FETCH_SUCCESS, payload : snapshot.val() })
			});
	}
};