import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Firebase from 'firebase';

import reducers from './reducers'
import sensibleInformations from './assets/sensibleInformations'
import LoginForm from './components/login-form';

export default class Main extends Component
{
	componentWillMount()
	{
		Firebase.initializeApp( sensibleInformations.firebase )
	}

	render()
	{
		return(
			<Provider store={ createStore( reducers ) }>
				<View style={ { marginTop : 100 } } >

					<LoginForm />

				</View>
			</Provider>
		);
	}
}