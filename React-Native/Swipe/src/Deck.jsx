import React, { Component } from 'react';
import { View, PanResponder } from 'react-native';

class Deck extends Component
{
	constructor( props )
	{
		super( props );

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
			 */
			onPanResponderMove : ( event, gesture ) =>
			{
				debugger; // Makes the debugger opens up whenever this line is called + can access variable in the context in the console -> now I can really see the value of gesture
				console.log(gesture)
			},

			onPanResponderRelease : () => {}
		});

		this.state = { panResponder }
	}

	renderCards()
	{ return this.props.data.map( item => this.props.renderCard( item ) ); }

	render()
	{
		return	(
					<View { ...this.state.panResponder.panHandlers } >
						{ this.renderCards() }
					</View>
				);
	}
}

export default Deck;