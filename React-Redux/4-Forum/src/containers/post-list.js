import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { readAllPosts } from '../actions/index';

class PostList extends Component
{
	componentWillMount()
	{
		this.props.readAllPosts();
	}

	render()
	{
		console.log( this.props.posts )
		return(
			<div>

				<h1>Liste de posts</h1>

			</div>
		);
	}
}

const mapStateToProps = ( state ) =>
{
	return { posts : state.posts }
}

const mapDispatchToProps = ( dispatch ) =>
({
	...bindActionCreators( { readAllPosts }, dispatch )
})

export default connect( mapStateToProps, mapDispatchToProps )( PostList );