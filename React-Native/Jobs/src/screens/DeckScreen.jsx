import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo'
import { Card, Button } from 'react-native-elements';

import Swipe from '../components/Swipe'
import actions from '../actions'

class DeckScreen extends Component
{
	renderCard( job )
	{
		const initialRegion =
		{
			longitude : job.longitude,
			latitude : job.latitude,
			latitudeDelta : 0.045,
			longitudeDelta : 0.02
		}

		return 	(
					<Card title={ job.jobtitle } containerStyle={ { height : 500 } }>

						<View style={ { height : 300 } }>
							<MapView
								cacheEnabled={ Platform.OS === 'android' /* because iOS manage really good mapviews by itself */ }
								scrollEnabled={ false }
								style={ { flex : 1 } }
								initialRegion={ initialRegion }
							>

							</MapView>
						</View>

						<View style={ styles.detailWrapper }>

							<Text>{ job.company }</Text>
							<Text>{ job.formattedRelativeTime }</Text>

						</View>

						<Text>
							{ job.snippet.replace( /<b>/g, '' ).replace( /<\/b>/g, '' ) /* To remove <b></b> that are in the indeed API */}
						</Text>
					</Card>
				);
	}

	renderNoMoreCards()
	{
		return 	(
					<Card title='No more Jobs'></Card>
				);
	}

	render()
	{
		return 	(
					<View>

						<Swipe
							data={ this.props.jobs }
							renderCard={ this.renderCard }/* ! When we are not putting the () after a fucntion here,
							we are letting the Swipe component (or whatever component) that he manages the call,
							whereas while putting the () the function will also be called once the render
							function is called */
							renderNoMoreCards={ this.renderNoMoreCards }
						/>

					</View>
				);
	}
}

const styles = StyleSheet.create(
{
	detailWrapper :
	{
		flexDirection : 'row',
		justifyContent : 'space-around',
		marginBottom : 10
	}
});

const mapStateToProps = ( { jobs } ) =>
{
	return { jobs : jobs.results };
};

export default connect( mapStateToProps, actions )( DeckScreen );