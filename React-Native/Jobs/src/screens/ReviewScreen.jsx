import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux'

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
				backgroundColor='rgba(0, 0, 0, 0)'
				color='rgba(0, 122, 255, 1)'
			/>
		),
		style :
		{
			marginTop : Platform.OS === 'android' ? 24 : 0
		}
	});

	renderLikedJobs()
	{
		return this.props.likedJobs.map( job =>
		{
			const { company, formattedRelativeTime, url } = job;

			return 	(
						<Card>

							<View style={ { height : 200 } }>

								<View style={ styles.detailWrapper }>
									<Text style={ styles.italics } >{ company }</Text>
									<Text style={ styles.italics }>{ formattedRelativeTime }</Text>
								</View>

							</View>

							<Button
								title='Apply now !'
								backgroundColor='#03A9F4'
								onPress={ () => Linking.openURL( url ) }
							/>

						</Card>
					);
		})
	}

	render()
	{
		return	 (
					<ScrollView>

						{ this.renderLikedJobs() }

					</ScrollView>
				);
	}
}

const styles =
{
	detailWrapper :
	{
		marginBottom : 10,
		flexDirection : 'row',
		justifyContent : 'space-arround'
	},
	italics :
	{
		fontStyle : 'italic'
	}
}

const mapStateToProps = state =>
{

	return { likedJobs : state.likedJobs };
};

export default connect( mapStateToProps )( ReviewScreen );