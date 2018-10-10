import React from 'react'
import { Text } from 'react-native'

const Header = ( {content, content2} ) => // Be carefull, if I'm not using the render function to use JSX, then it's not {} but it is ()
(
	<Text>{content} {content2}</Text>
);

export default Header;