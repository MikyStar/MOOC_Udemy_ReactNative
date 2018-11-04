import React from 'react'
import { Scene, Router } from 'react-native-router-flux';

import routes from './components/routes'
import LoginForm from './components/login-form';
import EmployeeList from './components/employee-list';

const RouterComponent = () =>
{
	return 	(
			<Router>
				<Scene key='root'>

					<Scene
						key={ routes.Login }
						component={ LoginForm }
						title='Please login ...'
						initial
					/>

					<Scene
						key={ routes.EmployeeList }
						component={ EmployeeList }
						title='Employees'
					/>

				</Scene>
			</Router>
			);
}

export default RouterComponent;