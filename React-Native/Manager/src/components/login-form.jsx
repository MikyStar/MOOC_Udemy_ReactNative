import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component
{
	onEmailChange( text )
	{
		this.props.emailChanged( text );
	}

	onPasswordChange( text )
	{
		this.props.passwordChanged( text );
	}

	onButtonPress()
	{
		const { email, password } = this.props;

		this.props.loginUser( { email, password } );
	}

	renderError()
	{
		if( this.props.error )
		{
			return	(
						<View style={ { backgroundColor : 'white' } }>
							<Text style={ styles.errorText }>{ this.props.error }</Text>
						</View>
					);
		}
	}

	renderButton()
	{
		if( this.props.loading )
			return <Spinner size='large'/>
		else
			return <Button whenPressed={ this.onButtonPress.bind( this ) }>Login</Button>
	}

	render()
	{
		return(
			<Card>

				<CardSection>

					<Input
						label='Email'
						placeholder='email@email.com'
						onChangeText={ this.onEmailChange.bind( this ) }
						value={ this.props.email }
					/>

				</CardSection>

				<CardSection>

					<Input
						isPassword
						label='Password'
						placeholder='password'
						onChangeText={ this.onPasswordChange.bind( this ) }
						value={ this.props.password }
					/>

				</CardSection>

				{this.renderError()}

				<CardSection>

					{ this.renderButton() }

				</CardSection>

			</Card>
		);
	}
}

const styles =
{
	errorText :
	{
		fontSize : 20,
		alignSelf : 'center',
		color : 'red'
	}
}

const mapStateToProps = state =>
{
	return 	{
				email : state.auth.email,
				password : state.auth.password,
				error : state.auth.error,
				loading : state.auth.loading
			};
};

export default connect( mapStateToProps, { emailChanged, passwordChanged, loginUser } )( LoginForm );