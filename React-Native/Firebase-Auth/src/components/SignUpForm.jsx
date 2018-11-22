import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

import sensibleInformations from '../assets/sensibleInformations'

class SignUpForm extends Component
{
	state = { phone : '' } // Exactly the same as declaring the state in a constructor, no need to use 'this'

	/* handleSubmit = () =>
	{
		axios.post( sensibleInformations.urlCreateUser, { phone : this.state.phone } )
			.then( () =>
			{
				axios.post(sensibleInformations.urlRequestOTP, { phone : this.state.phone } )
					.then( response => console.log( response ) )
			})
	} */

	/**
	 * ! This is the version of the code above but with async/await -> much cleaner
	 */
	handleSubmit = async () =>
	{
		try
		{
			/*
				'await' is not changing the way JS behave, JS behave like if it's asynchronous it doesn't care and go to
				the next statement without waiting for the line to finish
				It just tells Babel, hey this will return a Promise so wait for it, behind the scenes, there's a .then()
			 */
			await axios.post( sensibleInformations.urlCreateUser, { phone : this.state.phone } )

			const { data } = await axios.post( sensibleInformations.urlRequestOTP, { phone: this.state.phone } )
			console.log( data ) // Given that I'm not doing OTP with SMS 
		}
		catch( error ) { console.log( error ) }
	}

	render()
	{
		return	(
					<View>

						<View style={ { marginBottom : 10 } }>

							<FormLabel>Enter fake phone number</FormLabel>

							<FormInput
								value={ this.state.phone }
								onChangeText={ phone => this.setState( { phone } ) }
							/>

						</View>

						<Button
							title='Submit'
							onPress={ this.handleSubmit }
						/>

					</View>
				);
	}
}


export default SignUpForm;