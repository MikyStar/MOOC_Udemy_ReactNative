import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get( 'window' ).width;

class Slides extends Component
{
	renderSlides()
	{
		return this.props.data.map( slide =>
		(
			<View
				key={ slide.text }
				style={ [ style.slide, { backgroundColor : slide.color } ] }
			>
				<Text style={ style.text } >{ slide.text }</Text>
			</View>
		))
	}

	render()
	{
		return	(
					<ScrollView
						horizontal
						pagingEnabled
					>
						{ this.renderSlides() }
					</ScrollView>
				);
	}
}

const style =
{
	text :
	{
		fontSize : 30,
		color : 'white'
	},
	slide :
	{
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
		width : SCREEN_WIDTH
	}
}

export default Slides;