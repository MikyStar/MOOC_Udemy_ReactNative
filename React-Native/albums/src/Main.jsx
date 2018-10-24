import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';

import SomeText from './components/some-text';
import Header from './components/header';

const instructions = Platform.select( {
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
} );

type Props = {};

export default class Main extends Component<Props>
{
	render()
	{
		return (
			<Header text={ 'Albums' }/>
		);
	}
}