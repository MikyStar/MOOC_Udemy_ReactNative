import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import routes from './routes'

class AuthScreen extends Component
{
	componentDidMount()
	{
		this.props.facebookLogin();
		this.onAuthComplete( this.props );
	}

	onAuthComplete( props )
	{
		if( props.token )
			this.props.navigation.navigate( routes.map );
	}

	componentWillReceiveProps( nextProps )
	{
		this.onAuthComplete( nextProps );
	}

	render()
	{
		return	(
					<View />
				);
	}
}

const mapStateToProps = ( { auth } ) =>
{
	return { token : auth.token };
};

export default connect( mapStateToProps, actions )( AuthScreen );