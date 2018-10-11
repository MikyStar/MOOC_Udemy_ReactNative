import React from 'react';
import { View, Text } from 'react-native'
import { Button as ButtonRNE} from 'react-native-elements' // The alias here is not necessary, but if someday there's the same name in my imports, I can distinguish with that

import Header from './components/header'

export default class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = { myText : "Texte par défaut"}; // State is immutable, the constructor is the only place where I can directly access and assign it's value, otherwise we have to pass through setter
	}

	onPressButton()
	{
		this.setState( { myText : "Clické" } );
		console.log( "button pressed" )
	}

	render()
	{
		return (
			<View>
				<Header content="Liste de tâches " content2="en props !" />

				<ButtonRNE
					large
					iconRight
					icon={ {name : 'code'} }
					title="I'm a button"
					onPress={ this.onPressButton.bind(this) } // This way the this in onPressButton refers to the same this as the class, otherwise it would have refered the click object
				/>

				<Text>{ this.state.myText }</Text>
			</View>
		);
	}
}