import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Slides from '../components/Slides';
import routes from '../screens/routes'

const SLIDE_DATA =
[
	{
		text : 'Welcome to JobApp',
		color : '#03A9F4'
	},
	{
		text : 'Use this to get a job',
		color : '#009688'
	},
	{
		text : 'Set your location then slide away',
		color: '#03A9F4'
	}
]

class WelcomeScreen extends Component
{
	static navigationOptions =
	{
		tabBarVisible : false
	}

	onSlidesComplete = () =>
	{
		// Since we're using react-navigation, this props exists for every component rendered by the navigator ( see in Main.jsx )
		this.props.navigation.navigate( routes.auth );
	}

	render()
	{
		return 	(
					<View style={{ flex: 1 }}>

						<Slides data={ SLIDE_DATA } onComplete={ this.onSlidesComplete } />

					</View>
				);
	}
}

export default WelcomeScreen;