import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import SignUpForm from './components/SignUpForm';

class Main extends Component
{
	render()
	{
		return	(
					<View style={ styles.container }>

						<SignUpForm />

					</View>
				);
	}
}

const styles = StyleSheet.create(
{
	container :
	{
		flex : 1,
		justifyContent : 'center'
	}
});


export default Main;