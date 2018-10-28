import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component
{
	render()
	{
		console.log('props', this.props);
		return;
	}
}

/**
 *	Purpose -> Take the global state object (in the ReduxStore), and get some properties out off it to put them on props of the current component
 * The thing returned by that function is an object that is going to be accessible inside the props inside this component
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