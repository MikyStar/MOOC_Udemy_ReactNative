import React from 'react'
import { Text, View } from 'react-native'
import style from './style'

/**
 * Header is a stateless component
 */

export default Header = ( { content, content2 } ) => //If not using render(), to use JSX it's () not {}
(
	<View>

		<View style={ style.subHeader } /> {/* The little blue bar, yes this is how you comment */}

		<View style={ style.header }>
			<Text style={ style.text }>{ content } { content2 }</Text>
		</View>

	</View>
);

/*
	Basically, React is creating a props variable anyway and directly retrieving here the content and content2 attributes.
	A cool thing with ES6 is to directly create a variable out of an attribute of a JSON such as
	const temp =
	{
		hello : "hi",
		why : "?"
	};

	const {hello} = temp; // hello = "hi"
	const {hello, why} = temp; // hello = "hi" ; why = "?"
*/