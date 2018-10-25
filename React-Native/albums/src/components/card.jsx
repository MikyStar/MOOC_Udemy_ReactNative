import React from 'react';
import { View } from 'react-native';

export default Card = ( props ) =>
(
	<View style={ styles.containerStyle }>
		{ props.children }{/* This is how you put component passed by wrapping between tags like for View or Text */}
	</View>
);

const styles =
{
	containerStyle :
	{
		borderWidth : 1,
		borderRadius : 2,
		borderColor : '#ddd',
		borderBottomWidth : 0,
		shadowColor : '#000',
		shadowOffset :
		{
			width : 0,
			height : 2
		},
		shadowOpacity : 0.1,
		shadowRadius : 2,
		elevation : 1,
		marginLeft : 5,
		marginRight : 5,
		marginTop : 10
	}
};