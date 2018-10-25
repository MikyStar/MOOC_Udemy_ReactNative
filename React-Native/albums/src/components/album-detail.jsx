import React from 'react';
import { View, Text, Image } from 'react-native';

import Card from './card'
import CardSection from './cars-section';

export default AlbumDetail = ( { album } ) =>
{
	const { title, thumbnail_image, artist } = album;

	return (
		<Card>
			<CardSection>

				<View>

					<Image
						source={ { uri : thumbnail_image } }
						style={ styles.thumbnailStyle }
					/>

				</View>

				<View style={ styles.headerContentStyle }>

					<Text>{ title }</Text>
					<Text>{ artist }</Text>

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
	},
	thumbnailStyle : // ! An Image tag cannot be rendered if theres no hight and width
	{
		height : 50,
		width : 50
	}
}