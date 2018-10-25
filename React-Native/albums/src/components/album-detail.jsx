import React from 'react';
import { View, Text } from 'react-native';
import Card from './card'

export default AlbumDetail = ( props ) =>
{
	return (
		<Card>
			<Text>{ props.album.title }</Text>
		</Card>
	);
};