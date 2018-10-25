import React from 'react';
import { View, Text } from 'react-native';

import Card from './card'
import CardSection from './cars-section';

export default AlbumDetail = ( props ) =>
{
	return (
		<Card>
			<CardSection>
				<View>

				</View>

				<View style={ styles.headerContentStyle }>

					<Text>{ props.album.title }</Text>
					<Text>{ props.album.artist }</Text>

				</View>
			</CardSection>
		</Card>
	);
};

const styles =
{
	headerContentStyle :
	{
		flexDirecton : 'column',
		justifyContent : 'space-around'
	}
}