import { StyleSheet } from 'react-native'

import COLORS from '../../styles/colors'

export const style = StyleSheet.create(
{
	buttonChangeStatus :
	{
		backgroundColor : COLORS.primaryAction
	},
	buttonDelete :
	{
		backgroundColor : COLORS.red
	},
	modal :
	{
		backgroundColor : COLORS.white,
		height : 200,
		justifyContent : 'space-around'
	},
	buttonView :
	{
		flexDirection : 'row',
		justifyContent : 'center'
	},
	textView :
	{
		alignItems : 'center',
		justifyContent : 'center'
	}
});