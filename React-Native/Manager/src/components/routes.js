import { Actions } from 'react-native-router-flux';

/**
 * @description Here will just be an enumeration of names of the different routes, just to ensure autocompletion
 */
module.exports =
{
	name :
	{
		Login: "login",
		EmployeeList: "employee-list",
	},

	/**
	 * @param route A name present in the names attribute of this file
	 */
	navigateTo : (route) =>
	{
		if( typeof route === module.exports.names )
			return eval(`Actions.${route}`);
	}
}