import React from 'react';
import { View } from 'react-native';

const CardSection = ( props ) =>
(
	<View style={ [ styles.containerStyle, props.style ] }>{/* Because you can pass an array to styles, and this way you will manage if there's a style given in the props -> The more you go on the right, the more you override the previous one */}
		{ props.children }
	</View>
);

const styles =
{
	containerStyle :
	{
		borderBottomWidth : 1,
		padding : 5,
		backgroundColor : '#fff',
		justifyContent : 'flex-start',
		flexDirection : 'row',
		borderColor : '#ddd',
		position : 'relative'
	}
}

export { CardSection };