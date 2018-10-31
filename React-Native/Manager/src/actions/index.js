import actionTypes from './types'

export const emailChanged = text =>
{
	return 	{
				type : actionTypes.EMAIL_CHANGED,
				payload : text
			}
};

export const passwordChanged = text =>
{
	return 	{
				type : actionTypes.PASSWORD_CHANGED,
				payload : text
			}
}