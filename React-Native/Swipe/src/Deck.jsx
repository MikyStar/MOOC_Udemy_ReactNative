import React, { Component } from 'react';
import { View, PanResponder, Animated, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Deck extends Component
{
	constructor( props )
	{
		super( props );

		const position = new Animated.ValueXY();

		const panResponder = PanResponder.create(
		{
			/*
			 *  Executed everytime the user touch the screen
			 * 	If we return true from here, we are saying that we want this PanResponder
			 * 	to be responsible of the gesture
			 */
			onStartShouldSetPanResponder : () => true,

			/*
			 * Called whenever the user move his finger to the screen
			 * If I try to console log the gesture object and then drag the view mapped to the panResponder, I will see
			 * numbers in JSONs in console but if I expand those object, values are all set back to 0 because the
			 * gesture object is only one object in memory, it's only possible to access those datas at the time they
			 * are set, otherwise they will be crashed by the next value
			 *
			 * Gesture ( = the action between a click and a release ):
			 * 'dx' and 'dy' -> Total distance moved by the finger in one gesture
			 * 'vx' and 'vy' -> speed
			 * 'numberActiveTouches' -> how many fingers
			 */
			onPanResponderMove : ( event, gesture ) =>
			{
				//debugger; // Makes the debugger opens up whenever this line is called + can access variable in the context in the console -> now I can really see the value of gesture

				position.setValue( { x : gesture.dx, y : gesture.dy } );
			},

			onPanResponderRelease : () => this.resetPosition()
		});

		this.state = { panResponder, position }
	}

	resetPosition()
	{
		Animated.spring( this.state.position, { toValue : { x : 0, y : 0 } } ).start();
	}

	/**
	 * Where we handle what the animation should do
	 */
	getCardStyle()
	{
		const { position } = this.state;

		/**
		 * Interpolation is binding the evolution of a value with an other
		 * Here, inputRange and output range are evolving together for a given x position
		 * It makes variables evolve together propotionnaly
		 */
		const rotate = position.x.interpolate(
		{
			inputRange : [ -SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH *1.5 ], // min, mid, max // Just increase the path to makes rotation slower
			outputRange: ['-120deg', '0deg', '120deg'] // min, mid, max
		});

		return 	{
					...position.getLayout(),
					transform : [ { rotate } ]
				};
	}

	renderCards()
	{
		return this.props.data.map( ( item, index ) =>
		{
			if( index === 0 )
			{
				return 	(
							<Animated.View
								key={ item.id }
								style={ this.getCardStyle() }
								{ ...this.state.panResponder.panHandlers }
							>
								{ this.props.renderCard( item ) }
							</Animated.View>
						);
			}
			else
			{
				return this.props.renderCard( item );
			}
		});
	}

	render()
	{
		return	(
					<View>
						{ this.renderCards() }
					</View>
				);
	}
}

export default Deck;