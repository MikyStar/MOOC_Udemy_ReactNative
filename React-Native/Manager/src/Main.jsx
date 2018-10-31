import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Firebase from 'firebase';
import ReduxThunk from 'redux-thunk'

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
		const store = createStore( reducers, {}, applyMiddleware( ReduxThunk ) ); // The {} argument is for initial state

		return(
			<Provider store={ store }>
				<View style={ { marginTop : 100 } } >

					<LoginForm />

				</View>
			</Provider>
		);
	}
}