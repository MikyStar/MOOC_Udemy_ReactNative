import React, { Component } from 'react';
import { TextInput } from 'react-native';

import { Card, CardSection, Button} from './common';

export default class LoginForm extends Component
{
	state = { text : '' };

	render()
	{
		return(
			<Card>
				<CardSection>

					{/* Just like the Image tag, TextInput by default has no height and width
						We also have to pass by the value attribute because RN is a bit strange with TextInpit
						and the TextInput never know what value it has*/}
					<TextInput
						style={ { height : 20, width : 100 } }
						value={ this.state.text }
						onChangeText={ text => this.setState( { text }) }
					/>

				</CardSection>

				<CardSection />

				<CardSection>

					<Button>Login</Button>

				</CardSection>
			</Card>
		);
	}
}