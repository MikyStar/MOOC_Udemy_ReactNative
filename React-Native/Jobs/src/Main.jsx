import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { Icon } from 'react-native-elements';

import store from './store'
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
					[routes.map]:
					{
						screen: MapScreen,
						navigationOptions:
						{
							title: 'Map',
							tabBarIcon: ( { tintColor } ) => <Icon name="my-location" size={30} color={tintColor} />
						}
					},
					[ routes.deck ] :
					{
						screen : DeckScreen,
						navigationOptions :
						{
							title : 'Jobs',
							tabBarIcon: ( { tintColor } ) => <Icon name="description" size={30} color={tintColor} />
						}
					},
					review :
					{
						screen : createStackNavigator(
						{
							[ routes.review ] : { screen : ReviewScreen },
							[ routes.settings ] : { screen : SettingsScreen }
						}),
						navigationOptions:
						{
							tabBarIcon: ( { tintColor } ) => <Icon name='favorite' size={30} color={tintColor} />,
							title: 'Review Jobs'
						}
					}
				})
			}
		},
		{
			navigationOptions :
			{
				tabBarVisible : false
			},
			lazy : true
		});

		const AppContainer = createAppContainer( MainNavigator );

		return 	(
					<Provider store={ store }>
						<View style={styles.container}>

							<AppContainer />

						</View>
					</Provider>
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