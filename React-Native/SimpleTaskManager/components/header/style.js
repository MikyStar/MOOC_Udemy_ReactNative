import { StyleSheet } from 'react-native'
import COLORS from '../../styles/colors'

export default style = StyleSheet.create(
{
	subHeader :
	{
		backgroundColor : COLORS.darkPrimary,
		height : 40
	},
	header :
	{
		backgroundColor : COLORS.primary,
		height : 150,
		// flexDirection : 'column' it's implicit, by default it's that way
		justifyContent : 'center', // Vertical
		alignItems : 'center', // Horizontal
		shadowColor : COLORS.shadow,
		shadowOpacity : 0.2,
		shadowOffset : { height : 10 }
	},
	text :
	{
		color : COLORS.white,
		fontSize : 30
	}
});