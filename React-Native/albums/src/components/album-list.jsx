import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AlbumList extends Component
{
	state = { albums : [] };

	componentWillMount()
	{
		fetch( 'https://rallycoding.herokuapp.com/api/music_albums' ).then(
			( response ) => response.json()
		).then(
			( responseData ) => this.setState( { albums : responseData } )
		);
	}

	render()
	{
		console.log(this.state);

		return (
			<View>
				<Text>AlbumList !!</Text>
			</View>
		)
	}
}