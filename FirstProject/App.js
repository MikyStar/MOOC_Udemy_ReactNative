import React from 'react';
import { View } from 'react-native'
import { Button as ButtonRNE} from 'react-native-elements' // The alias here is not necessary, but if someday there's the same name in my imports, I can distinguish with that

import Header from './components/header'

export default class App extends React.Component
{
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
				/>
			</View>
		);
	}
}