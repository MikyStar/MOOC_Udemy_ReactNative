import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import AlbumDetail from './album-detail';


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

	renderAlbums()
	{
		// ! The key for each elements in an JSX array has to be unique even if we render again and again, so it's not recommanded to use its index, here the album.title is not really good

		return this.state.albums.map( album => <AlbumDetail key={ album.title } album={ album } /> );
	}

	render()
	{
		console.log(this.state);

		return (
			<ScrollView>
				{ this.renderAlbums() }
			</ScrollView>
		)
	}
}