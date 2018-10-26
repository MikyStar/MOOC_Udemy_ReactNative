import React, { Component } from 'react';
import { Text,View } from 'react-native';

import { Header } from './components/common'

export default class Main extends Component
{
	render()
	{
		return(
			<View>
				<Header text={ 'Authentification' } />
				<Text>Hey</Text>
			</View>
		);
	}
}