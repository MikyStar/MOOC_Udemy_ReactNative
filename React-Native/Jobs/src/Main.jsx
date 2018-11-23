import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Main extends Component
{
	render()
	{
		return (
			<View style={styles.container}>

				<Text>Hiiiiiiiii ! </Text>

			</View>
		);
	}
}

const styles = StyleSheet.create(
	{
		container:
		{
			flex: 1,
			justifyContent : 'center'
		}
	} );


export default Main;