import React from 'react'
import ActionButton from 'react-native-action-button'
import { Icon } from 'react-native-elements'

import COLORS from '../../styles/colors'

export default ButtonAddTask = () =>
(
	<ActionButton
		buttonColor={ COLORS.primaryAction }
		icon={ <Icon color={ COLORS.white } name={ 'add' } /> }
		onPress={ () => onPress() }
	/>
);

function onPress()
{
	console.log('add')
}