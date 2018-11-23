import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Firebase from 'firebase';

import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import sensibleInformations from './assets/sensibleInformations'


class Main extends Component
{
	componentDidMount()
	{
		Firebase.initializeApp( sensibleInformations.firebaseConfig )
	}

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