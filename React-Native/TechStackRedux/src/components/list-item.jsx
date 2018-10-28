import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions'; // The * because I export with the word export a lot of times in a file

class ListItem extends Component
{
	renderDescription()
	{
		const { library, selectedLibraryID } = this.props;

		if( library.item.id === selectedLibraryID)
		{
			return (
				<Text>{ library.item.description }</Text>
			)
		}
	}

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

					{  this.renderDescription() }

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

const mapStateToProps = state =>
{
	return {
		selectedLibraryID : state.selectedLibraryID
	}
}

/*
	Using directly the spelling 'actions' in 'connect( null, actions )( ListItem );' is to we map 'actions' to props of this component ; Just like mapStateToProps we can access things within props
*/
export default connect( mapStateToProps, actions )( ListItem );