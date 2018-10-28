import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions'; // The * because I export with the word export a lot of times in a file

class ListItem extends Component
{
	render()
	{
		const { title } = styles;

		return(
			<TouchableWithoutFeedback
				onPress={ () => this.props.selectLibrary( this.props.library.item.id ) }
			>
				<View>

					<CardSection>
						<Text style={ title }>{ this.props.library.item.title }</Text>
					</CardSection>

				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles =
{
	title :
	{
		fontSize : 18,
		paddingLeft : 15
	}
}

/*
	Using directly the spelling 'connect( null, actions )( ListItem );' because we have no mapStateToProps needed
	is because that way, we are rewiring the 'actions' to redux but also we map 'actions' to props of this component
*/
export default connect( null, actions )( ListItem );