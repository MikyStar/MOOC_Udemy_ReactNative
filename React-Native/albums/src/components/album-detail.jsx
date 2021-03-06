import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import Card from './card'
import CardSection from './card-section';
import Button from './button';

export default AlbumDetail = ( { album } ) =>
{
	const { title, thumbnail_image, artist, image, url } = album;

	return (
		<Card>

			<CardSection>
				<View style={ styles.thumbnailContainerStyle }>

					<Image
						source={ { uri : thumbnail_image } }
						style={ styles.thumbnailStyle }
					/>

				</View>

				<View style={ styles.headerContentStyle }>

					<Text style={ styles.headerTextStyle }>{ title }</Text>
					<Text>{ artist }</Text>

				</View>
			</CardSection>

			<CardSection>
				<Image
					source={ { uri : image } }
					style={ styles.imageStyle }
				/>
			</CardSection>

			<CardSection>
				<Button whenPressed={ () => Linking.openURL( url ) }>Buy now</Button>{/* We could have done it by props but it was just to try this way out */}
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
	headerTextStyle :
	{
		fontSize : 18,
	},
	thumbnailStyle : // ! An Image tag cannot be rendered if theres no hight and width
	{
		height : 50,
		width : 50
	},
	thumbnailContainerStyle :
	{
		justifyContent : 'center',
		alignItems : 'center',
		marginLeft : 10,
		marginRight : 10,
	},
	imageStyle :
	{
		// ! Don't ask any question, this combinaison is magic and makes it take the full size possible of where the Image is located
		height : 300,
		flex : 1,
		width : null
	}
}