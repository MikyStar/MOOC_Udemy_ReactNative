import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import types from './types';
import datas from '../assets/sensibleInformations'

module.exports =
{
	facebookLogin : () => async dispatch =>
	{
		const token = await AsyncStorage.getItem( 'fb_token' );

		if( token )
		{
			dispatch( { type : types.FACEBOOK_LOGIN_SUCCESS, payload : token } )
		}
		else
		{
			doFacebookLogin( dispatch );
		}
	}
};

const doFacebookLogin = async dispatch =>
{
	let { token, type } = await Facebook.logInWithReadPermissionsAsync( datas.facebookAppID,
	{
		permissions : [ 'public_profile' ]
	})

	if( type === 'cancel' )
	{
		return dispatch( { type : types.FACEBOOK_LOGIN_FAIL })
	}
	else
	{
		await AsyncStorage.setItem( 'fb_token', token );

		dispatch( { type : types.FACEBOOK_LOGIN_SUCCESS, payload : token } );
	}
};