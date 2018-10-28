import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions'; // The * because I export with the word export a lot of times in a file

class ListItem extends Component
{
	renderDescription()
	{
		const { library, expanded } = this.props;

		if( expanded )
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

/**
 *	@description This function is actually quite the place to handle all the logic behind of the component. It's here that we are going to pre-process all the work that should be done to only little functions. Because, at the end, we don't want to just redescribe props, we want to get informations out of it by some process, so if I just handle in this function the actual process, I can just send the answer inside the props
 *
 * @param { JSON } state Will be the state of the application from the Redux Store
 * @param { JSON } ownProps Will be a refereance to the very own props of the component
 */
const mapStateToProps = (state, ownProps) =>
{
	const expanded = state.selectedLibraryID === ownProps.library.item.id;

	return { expanded };
}

/*
	Using directly the spelling 'actions' in 'connect( null, actions )( ListItem );' is to we map 'actions' to props of this component ; Just like mapStateToProps we can access things within props
*/
export default connect( mapStateToProps, actions )( ListItem );