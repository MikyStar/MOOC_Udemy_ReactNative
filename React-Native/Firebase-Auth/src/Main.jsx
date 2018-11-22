import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';


class Main extends Component
{
	render()
	{
		return	(
					<View style={ styles.container }>

						<SignUpForm />

						<SignInForm />

					</View>
				);
	}
}

const styles = StyleSheet.create(
{
	container :
	{
		flex : 1,
		justifyContent : 'space-around',
		alignItems : 'center',
		backgroundColor : '#fff'
	}
});


export default Main;