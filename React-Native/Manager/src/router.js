import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux';

import routes from './components/routes'
import LoginForm from './components/login-form';
import EmployeeList from './components/employee-list';
import EmployeeCreate from './components/employee-create';

const RouterComponent = () =>
{
	return 	(
			<Router>
				<Scene key='root' hideNavBar >

					<Scene key='auth'>

						<Scene
							key={ routes.Login }
							component={ LoginForm }
							title='Please login ...'
							initial
						/>

					</Scene>

					<Scene key='main'>

						<Scene
							key={ routes.EmployeeList }
							component={ EmployeeList }
							title='Employees'
							rightTitle='Add'
							onRight={ () => { Actions.employeeCreate() } }
							initial
						/>

						<Scene
							key={ routes.EmployeeCreate }
							component={ EmployeeCreate }
							title='Create employee'
							rightTitle='Add'
							onRight={ () => { console.log('right') } }
						/>

					</Scene>

				</Scene>
			</Router>
			);
}

/*
! Making high order Scene allows to manage the brawsing with the back button
*/

export default RouterComponent;