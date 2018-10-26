import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';

import sensibleInformations from './assets/sensibleInformations'
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/login-form';

export default class Main extends Component
{
	state =
	{
		loggedIn : null
	};

	componentWillMount()
	{
		Firebase.initializeApp( sensibleInformations.firebase )

		Firebase.auth().onAuthStateChanged( user =>
		{
			if( user )
				this.setState( { loggedIn : true } );
			else
				this.setState( { loggedIn: false } )
		});
	}

	renderContent()
	{
		switch( this.state.loggedIn )
		{
			case true :
				return (
					<CardSection>
						<Button
						whenPressed={ () => Firebase.auth().signOut() }
						>
							Log out
						</Button>
					</CardSection>
				);
			case false :
				return <LoginForm />
			default :
					return <Spinner size='large' />
		}
	}

	render()
	{
		return (
			<View>
				<Header text={'Authentification'} />

				{ this.renderContent() }

			</View>
		);
	}
}