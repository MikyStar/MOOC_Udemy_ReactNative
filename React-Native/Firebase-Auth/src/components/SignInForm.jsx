import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

import sensibleInformations from '../assets/sensibleInformations'

/**
 * Almost just copy paste the SignUpForm, lazyness
 */
class SignInForm extends Component
{
	state = { phone : '', code : '' } // Exactly the same as declaring the state in a constructor, no need to use 'this'

	handleSubmit = async () =>
	{
		try
		{
			const { data } = await axios.post( sensibleInformations.urlVerifyOTP, { phone : this.state.phone, code : this.state.code })
			console.log( data.token )
		}
		catch( error ) { console.log( error ) }
	}

	render()
	{
		return (
			<View>

				<View style={{ marginBottom: 10 }}>

					<FormLabel>Enter fake phone number</FormLabel>

					<FormInput
						value={this.state.phone}
						onChangeText={phone => this.setState( { phone } )}
					/>

				</View>

				<View style={{ marginBottom: 10 }}>

					<FormLabel>Enter Code</FormLabel>

					<FormInput
						value={ this.state.code }
						onChangeText={ code => this.setState( { code } )}
					/>

				</View>

				<Button
					title='Submit'
					onPress={this.handleSubmit}
				/>

			</View>
		);
	}
}


export default SignInForm;