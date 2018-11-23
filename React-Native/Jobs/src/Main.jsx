import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';

class Main extends Component
{
	render()
	{
		const MainNavigator = createBottomTabNavigator(
		{
			welcome : { screen : WelcomeScreen },
			auth : { screen : AuthScreen },
			main :
			{
				screen : createBottomTabNavigator(
				{
					map : { screen : MapScreen },
					deck : { screen : DeckScreen }
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