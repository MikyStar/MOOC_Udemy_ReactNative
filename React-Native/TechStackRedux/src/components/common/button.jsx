import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ( { whenPressed, children } ) =>
{
	const { buttonStyle, textStyle } = styles;

	return (
		<TouchableOpacity
			style={ buttonStyle }
			onPress={ whenPressed }
		>

			<Text style={ textStyle }>{ children }</Text>

		</TouchableOpacity>
	)
};

const styles =
{
	textStyle :
	{
		alignSelf : 'center',
		color: '#007aff',
		fontSize : 16,
		fontWeight : '600', // ! Carefull, between quotes
		paddingTop : 10,
		paddingBottom : 10
	},
	buttonStyle :
	{
		flex : 1,
		alignSelf : 'stretch', // Position yourself to fill the size of the container
		backgroundColor : '#fff',
		borderRadius : 5,
		borderWidth : 1,
		borderColor : '#007aff',
		marginLeft : 5,
		marginRight : 5,
	}
}

export { Button };