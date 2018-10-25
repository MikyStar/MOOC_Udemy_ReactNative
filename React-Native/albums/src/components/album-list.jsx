import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AlbumList extends Component
{
	componentWillMount()
	{
		fetch( 'https://rallycoding.herokuapp.com/api/music_albums' ).then(
			( response ) => response.json()
		).then(
			( responseData ) => console.log( responseData )
		);
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