import React from 'react'
import { Text } from 'react-native'

const Header = (props) => // Be carefull, if I'm not using the render function to use JSX, then it's not {} but it is ()
(
	<Text>{props.content}</Text>
);

export default Header;