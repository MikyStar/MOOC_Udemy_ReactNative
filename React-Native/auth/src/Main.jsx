import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';

import sensibleInformations from './assets/sensibleInformations'
import { Header } from './components/common';
import LoginForm from './components/login-form';

export default class Main extends Component
{
	componentWillMount()
	{
		Firebase.initializeApp( sensibleInformations.firebase )
	}

	render()
	{
		return (
			<View>
				<Header text={'Authentification'} />
				<LoginForm />
			</View>
		);
	}
}