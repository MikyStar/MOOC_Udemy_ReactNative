import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AlbumList extends Component
{
	componentWillMount()
	{
		console.log("yup")
	}

	render()
	{
		return (
			<View>
				<Text>AlbumList !!</Text>
			</View>
		)
	}
}