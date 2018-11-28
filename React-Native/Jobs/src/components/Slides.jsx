import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get( 'window' ).width;

class Slides extends Component
{
	renderSlides()
	{
		return this.props.data.map( ( slide, index ) =>
		(
			<View
				key={ slide.text }
				style={ [ style.slide, { backgroundColor : slide.color } ] }
			>
				<Text style={ style.text } >{ slide.text }</Text>
				{ this.renderLastSlide( index ) }
			</View>
		))
	}

	renderLastSlide( index )
	{
		if( index === ( this.props.data.length -1 ) )
			return 	(
						<Button
							title='Onwards !'
							raised
							buttonStyle={ style.button }
							onPress={ this.props.onComplete }
						/>
					);
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
		color : 'white',
		textAlign : 'center'
	},
	slide :
	{
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
		width : SCREEN_WIDTH
	},
	button :
	{
		backgroundColor : '#0288D1',
		marginTop : 15
	}
}

export default Slides;