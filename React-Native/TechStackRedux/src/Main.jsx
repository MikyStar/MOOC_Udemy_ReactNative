import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import reducers from './reducers'
import { Header } from './components/common';
import LibraryList from './components/library-list';

export default class Main extends Component
{
	render()
	{
		return(
			<Provider store={ createStore( reducers ) } >
				<View style={ { flex : 1 } }>

					<Header text='Tech Stack' />

					<LibraryList />

				</View>
			</Provider>
		);
	}
}

/*
! The store contain the different states of the application
! The Provider is what makes the link between the store and the React application
! The Provider can only have one child, so one big View
*/