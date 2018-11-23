import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ReviewScreen extends Component
{
	/**
	 * The Navigator that I created using the react-navigation library is going to use this attribute
	 */
	static navigationOptions =
	{
		headerTitle : 'Review Jobs',
		headerRight :
		(
			<Text>Go right</Text>
		)
	}

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