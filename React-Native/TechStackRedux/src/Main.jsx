import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'react-redux'

import reducers from './reducers'

export default class Main extends Component
{
	render()
	{
		return(
			<Provider store={ createStore( reducers ) } >

				<View>
					<Text>Test</Text>
				</View>

			</Provider>
		);
	}
}

/*
! The store contain the different states of the application
! The Provider is what makes the link between the store and the React application
*/