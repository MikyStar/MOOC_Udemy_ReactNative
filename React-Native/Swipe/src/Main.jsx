import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Ball from './Ball';

class Main extends Component
{
	render()
	{
		return	(
					<View style={ styles.container }>
						<Ball />
					</View>
				);
	}
}

const styles =
{
	container :
	{
		flex : 1,
		backgroundColor : '#fff'
	}
}

export default Main;