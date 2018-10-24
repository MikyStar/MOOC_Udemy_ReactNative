import React from 'react'
import ActionButton from 'react-native-action-button'
import { Icon } from 'react-native-elements'

import COLORS from '../../styles/colors'

export default ButtonAddTask = ( { onPressCallback } ) =>
(
	<ActionButton
		buttonColor={ COLORS.primaryAction }
		onPress={ () => onPressCallback() }
	>
		<Icon color={ COLORS.white } name={ 'add' } />
	</ActionButton>
);