import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import Modal from 'react-native-modal'
import { style } from './style'

export default MenuTask = () =>
(
	<View>

		<Modal
			isVisible // Actually it should be isVisible={true} but in JSX if it's true no need
			animationIn={ 'zoomInDown' }
			animationOut={ 'zoomOutUp' }
			animationInTiming={ 1000 } // in ms
			animationOutTiming={ 1000 }
			backdropTransitionInTiming={ 1000 }
			backdropTransitionOutTiming={ 1000 }
		>
			<View>
				<Text>Que souhaitez vous faire ?</Text>
			</View>

			<View>
				<Button
					title="Supprimer"
					onPress={ () => console.log('suppr') }
				/>
				<Button
					title="Changer status"
					onPress={ () => console.log('change') }
				/>

			</View>

		</Modal>

	</View>
);