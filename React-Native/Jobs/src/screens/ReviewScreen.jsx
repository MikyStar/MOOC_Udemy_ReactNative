import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
			/>
		)
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