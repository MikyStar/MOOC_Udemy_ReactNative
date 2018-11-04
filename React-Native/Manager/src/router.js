import React from 'react'
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './components/login-form';

const RouterComponent = () =>
{
	return 	(
			<Router>
				<Scene key='root'>

					<Scene
						key='login'
						component={ LoginForm }
						title='Please login ...'
					/>
					
				</Scene>
			</Router>
			);
}

export default RouterComponent;