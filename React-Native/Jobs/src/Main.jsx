import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";

import routes from './screens/routes'
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

class Main extends Component
{
	render()
	{
		const MainNavigator = createBottomTabNavigator(
		{
			[ routes.welcome ] : { screen : WelcomeScreen },
			[ routes.auth ] : { screen : AuthScreen },
			main :
			{
				screen : createBottomTabNavigator(
				{
					[ routes.map ] : { screen : MapScreen },
					[ routes.deck ] : { screen : DeckScreen },
					review :
					{
						screen : createStackNavigator(
						{
							[ routes.review ] : { screen : ReviewScreen },
							[ routes.settings ] : { screen : SettingsScreen }
						})
					}
				})
			}
		});

		const AppContainer = createAppContainer( MainNavigator );

		return 	(
					<View style={styles.container}>

						<AppContainer />

					</View>
				);
	}
}

const styles = StyleSheet.create(
{
	container:
	{
		flex: 1,
		justifyContent : 'center',
	}
} );


export default Main;