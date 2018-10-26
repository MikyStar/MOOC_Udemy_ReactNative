import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ( { label, value, onChangeText, placeholder } ) =>
{
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={ containerStyle }>
			<Text style={ labelStyle }>{label}</Text>

			<TextInput
				value={ value }
				onChangeText={ onChangeText }
				style={ inputStyle }
				autoCorrect={ false }
				placeholder={ placeholder }
			/>
		</View>
	);
};

const styles =
{
	inputStyle :
	{
		color : '#000',
		paddingRight : 5,
		paddingLeft : 5,
		fontSize : 18,
		lineHeight : 23,
		flex : 2, // It's like weights in Android : Given that the labelStyle also have a flex of 1, it's mean that the View that contains inputStyle and labelStyle will have a total division of space by 3 and the inputStyle is going to take 2/3 of this place
		height: 20,
		width: 100
	},
	labelStyle :
	{
		fontSize : 18,
		paddingLeft : 20,
		flex : 1
	},
	containerStyle :
	{
		height : 40,
		flex : 1,
		flexDirection : 'row',
		alignItems : 'center'
	}
};

export { Input };