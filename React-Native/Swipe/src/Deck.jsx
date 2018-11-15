import React, { Component } from 'react';
import { View, PanResponder, Animated, Dimensions, LayoutAnimation, UIManager } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class Deck extends Component
{
	/**
	 * Good solution to not force the use of some props, if we want to provide them we can if not this
	 * allows us to not have to check everytime whether the function is defined or not and is its a function
	 */
	static defaultProps =
	{
		onSwipeRight : () => {},
		onSwipeLeft : () => {}
	}

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

			onPanResponderRelease : ( event, gesture ) =>
			{
				if( gesture.dx > SWIPE_THRESHOLD )
				{
					this.forceSwipe( 'right' );
				}
				else if( gesture.dx < -SWIPE_THRESHOLD )
				{
					this.forceSwipe( 'left' );
				}
				else
				{
					this.resetPosition()
				}
			}
		});

		// ! The documentation says that position is an attribut of state but that doesn't make sense, it's much cleaner to pass by this.position but let's do by the doc
		this.state = { panResponder, position, index : 0 }
	}

	componentWillReceiveProps( nextProps )
	{
		if( nextProps.data !== this.props.data )
		{
			this.setState( { index : 0 } );
		}
	}

	componentWillUpdate()
	{
		/*
			Android
			If 'UIManager.setLayoutAnimationEnabledExperimental' function exists, call it with true
		*/
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

		LayoutAnimation.spring(); // because we are in componentWillUpdate, it says everytime the component is supposed to rerender, then do it with a spring animation
	}

	forceSwipe( direction )
	{
		const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;

		Animated.timing( this.state.position,
		{
			toValue : { x, y : 0 },
			duration : SWIPE_OUT_DURATION
		}).start( () => this.onSwipeComplete( direction ) );
	}

	onSwipeComplete( direction )
	{
		const { onSwipeLeft, onSwipeRight, data } = this.props;
		const item = data[ this.state.index ];

		direction === 'right' ? onSwipeRight( item ) : onSwipeLeft( item );

		this.state.position.setValue( { x : 0, y : 0 } ); // ! Yeah, we are mutating the state, it doesn't make any sense, but this is how the documentation says we have to do
		this.setState( { index : this.state.index + 1 } );
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
		if( this.state.index >= this.props.data.length )
		{
			return this.props.renderNoMoreCards();
		}
		else
		{
			return this.props.data.map( ( item, cardIndex ) =>
			{
				if ( cardIndex < this.state.index ) return null;

				if ( cardIndex === this.state.index )
				{
					return 	(
								<Animated.View
									key={item.id}
									style={ [ this.getCardStyle(), styles.card ]}
									{...this.state.panResponder.panHandlers}
								>
									{this.props.renderCard( item )}
								</Animated.View>
							);
				}
				else
				{
					return 	(
								// If the image was flashing before, it's because it passes from being wrapped by a regular view to an animated.view, so we juste wrap from start by an animated.view, there's no real performance leak there
								<Animated.View
									style={ [ styles.card, { top : 10 * ( cardIndex - this.state.index ) } ] }
									key={ item.id }
								>
									{ this.props.renderCard( item ) }
								</Animated.View>
							);
				}
			} ).reverse();
		}
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

const styles =
{
	card :
	{
		position : 'absolute', // Puts on top; it also make the view shrink to its minimum
		width : SCREEN_WIDTH
	}
};

export default Deck;