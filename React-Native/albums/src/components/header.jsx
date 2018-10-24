import React from 'react';
import { Text, View } from 'react-native';

export default Header = ( props ) =>
{
	const { textStyle, viewStyle } = styles;

	return(
			<View style={ viewStyle }>
				<Text style={ textStyle }>{ props.text }</Text>
			</View>
		);
};

const styles =
{
	viewStyle :
	{
		backgroundColor : '#F8F8F8',
		justifyContent : 'center',
		alignItems : 'center',
		setHigh : 60,
		paddingTop : 40,
		paddingBottom : 10,
		shadowColor : '#000',
		shadowOffset :
		{
			width : 0,
			height : 2
		},
		shadowOpacity : 0.2,
		elevation : 2,
		position : 'relative'
	},
	textStyle :
	{
		fontSize : 20
	}
};