import React from 'react'
import { Text } from 'react-native'

/**
 * Header is a stateless component
 */

const Header = ( {content, content2} ) => // Be carefull, if I'm not using the render function to use JSX, then it's not {} but it is ()
(
	<Text>{content} {content2}</Text>
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


export default Header;