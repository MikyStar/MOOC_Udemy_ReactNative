import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';

import Header from './components/header';
import AlbumList from './components/album-list';

const instructions = Platform.select(
{
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

export default class Main extends Component
{
	render()
	{
		return (
			<View style={ { flex : 1 } }>{/* See explanation below */}

				<Header text={ 'Albums' }/>
				<AlbumList />

			</View>
		);
	}
}

/*
! This is because this view is the Root View of the app and it contains a ScrollView
! Saying flex : 1 means, I want this View to take as much space as possible
! We could have done this like usual with a const difined below but it was just for this attribute so we don't care
*/