import React from 'react';
import { View } from 'react-native'

import Header from './components/header'

export default class App extends React.Component
{
	render()
	{
		return (
			<View>
				<Header content="Liste de tâches " content2="en props !" />
			</View>
		);
	}
}