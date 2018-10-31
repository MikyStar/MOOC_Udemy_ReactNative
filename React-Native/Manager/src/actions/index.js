import Firebase from 'firebase';

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

/**
 * @async -> This is why we imported Redux-Thunk and used dispatch
 */
export const loginUser = ( { email, password } ) =>
{
	return dispatch =>
	{
		Firebase.auth().signInWithEmailAndPassword( email, password)
		.then( user => dispatch(
		{
			type : actionTypes.LOGIN_USER_SUCCESS,
			payload : user
		}));
	};
}

/*
! Redux-Thunk is used to handle actions that are asynchronous
! Thanks to Redux-Thunk, instead of having to send back an object, we can send a function with a "dispatch"
*/