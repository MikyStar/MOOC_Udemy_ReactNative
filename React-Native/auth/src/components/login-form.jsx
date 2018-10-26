import React, { Component } from 'react';
import Firebase from 'firebase';
import { Text } from 'react-native';

import { Card, CardSection, Button, Input} from './common';

export default class LoginForm extends Component
{
	state =
	{
		email : '',
		password : '',
		error : ''
	};

	/**
	 * Here, the only way we get an error is if a known email doesn't put the right password.
	 * Otherwise if it's a new email, il's gonna create a new account
	 */
	sumbitLogin()
	{
		const { email, password } = this.state;

		this.setState( { error : '' } ); // To make sure that if the user fails then succeed the error will be removed

		Firebase.auth().signInWithEmailAndPassword( email, password )
		.catch(
		() =>
		{
			Firebase.auth().createUserWithEmailAndPassword( email, password )
			.catch(
			() =>
			{
				this.setState( { error : 'Authentification failed' } );
			});
		});
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

					<Button
						whenPressed={ this.sumbitLogin.bind( this ) }
					>
						Login
					</Button>

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