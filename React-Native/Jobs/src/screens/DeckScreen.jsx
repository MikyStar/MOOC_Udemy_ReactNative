import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo'
import { Card, Button } from 'react-native-elements';

import Swipe from '../components/Swipe'
import * as actions from '../actions'
import routes from './routes'

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

	/**
	 * ! GOTCHA
	 * Don't forget, this function is only defined here, but it's called within the Swipe component
	 * this means that inside the props, if I'm using a callback and I use the keyword 'this', for instance
	 * "onPress={ () => this.props.navigation.navigate( routes.map ) }"", 'this' will refer to the context
	 * inside the Swipe component and for this example Swipe has no reference to the navigation props so it
	 * will be undefined as is
	 * ! This is to prevent those kind of stuff that we transformed "renderNoMoreCards" to an arrow function
	 */
	renderNoMoreCards = () =>
	{
		return 	(
					<Card title='No more Jobs'>

						<Button
							title='Back to map'
							large
							icon={ { name : 'my-location' } }
							backgroundColor='#03A9F4'
							onPress={ () => this.props.navigation.navigate( routes.map ) }
						/>

					</Card>
				);
	}

	render()
	{
		return 	(
					<View style={ { marginTop : 20 } } >

						<Swipe
							data={ this.props.jobs }
							renderCard={ this.renderCard }/* ! When we are not putting the () after a fucntion here,
							we are letting the Swipe component (or whatever component) that he manages the call,
							whereas while putting the () the function will also be called once the render
							function is called */
							renderNoMoreCards={ this.renderNoMoreCards }
							onSwipeRight={ job => this.props.likeJob( job ) }
							keyProp='jobkey'
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