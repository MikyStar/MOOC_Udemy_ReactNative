import React, { Component } from 'react';
import Firebase from 'firebase';
import { Text } from 'react-native';

import { Card, CardSection, Button, Input, Spinner } from './common';

export default class LoginForm extends Component
{
	state =
	{
		email : '',
		password : '',
		error : '',
		loading : false
	};

	/**
	 * Here, the only way we get an error is if a known email doesn't put the right password.
	 * Otherwise if it's a new email, il's gonna create a new account
	 */
	sumbitLogin()
	{
		const { email, password } = this.state;

		this.setState(
		{
			error : '',
			loading : true
		}); // To make sure that if the user fails then succeed the error will be removed

		Firebase.auth().signInWithEmailAndPassword( email, password )
		.then( this.onLoginSuccess.bind( this ) )
		.catch( () =>
		{
			Firebase.auth().createUserWithEmailAndPassword( email, password )
			.then( this.onLoginSuccess.bind( this ) )
			.catch( this.onLoginFail.bind( this ) );
		});
	}

	onLoginFail()
	{
		this.setState(
		{
			error: 'Authentification failed',
			loading: false
		});
	}

	onLoginSuccess()
	{
		this.setState(
		{
			email : '',
			password : '',
			loading : false,
			error : ''
		});
	}

	renderButton()
	{
		if( this.state.loading )
		{
			return <Spinner size='small' />
		}
		else
		{
			return (
				<Button
					whenPressed={this.sumbitLogin.bind( this )}
				>
					Login
					</Button>
			);
		}
	}

	render()
	{
		return(
			<Card>
				<CardSection>

					{/* Just like the Image tag, TextInput by default has no height and width
						We also have to pass by the value attribute because RN is a bit strange with TextInpit
						and the TextInput never know what value it has*/}
					<Input
						label={ 'Email' }
						value={ this.state.email }
						onChangeText={ email => this.setState( { email }) }
						placeholder={ 'user@gmail.com' }
					/>

				</CardSection>

				<CardSection>

					<Input
						placeholder='password'
						label='Password'
						value={ this.state.password }
						onChangeText={ password => this.setState( { password } ) }
						isPassword
					/>

				</CardSection>

				<Text style={ styles.errorText }>{ this.state.error }</Text>

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