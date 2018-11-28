import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

import routes from './routes'

class ReviewScreen extends Component
{
	/**
	 * The Navigator that I created using the react-navigation library is going to use this attribute
	 */
	static navigationOptions = ( { navigation } ) =>
	({
		headerTitle : 'Review Jobs',
		headerRight :
		(
			<Button
				title='Settings'
				onPress={ () => { navigation.navigate( routes.settings ) } }
				backgroundColor='rgba(0, 0, 0, 0)'
				color='rgba(0, 122, 255, 1)'
			/>
		),
		style :
		{
			marginTop : Platform.OS === 'android' ? 24 : 0
		}
	});

	render()
	{
		return	 (
					<View>

						<Text>ReviewScreen</Text>

					</View>
				);
	}
}

export default ReviewScreen;