import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './list-item';

class LibraryList extends Component
{
	renderItem( library )
	{
		return <ListItem library={ library } />
	}

	render()
	{
		/**
		 * @description Much better than the map function in performance for lists that has all his elements can't be shown at the same time on the screen -> Same system than RecyclerView in Android
		 */
		return(
			<FlatList
				data={ this.props.libraries }
				renderItem={ this.renderItem }
				keyExtractor={ ( library ) => library.id }
			/>
		);
	}
}

/**
 *	@description Take the global state object (in the ReduxStore), and get some properties out off it to put them on props of the current component
 * @returns an object that is going to be accessible inside the props inside this component
 */
const mapStateToProps = state =>
{
	return { libraries : state.libraries };
}

export default connect( mapStateToProps )( LibraryList );

/*
	When calling the connect function just with parenthesis, the return of this function is a
	function that is going to be called back with the other set of parenthesis containing LibraryList
*/