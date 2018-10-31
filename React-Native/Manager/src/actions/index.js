import actionTypes from './types'

export const emailChanged = text =>
{
	return {
		type : actionTypes.EMAIL_CHANGED,
		payload : text
	}
};