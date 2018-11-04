import actionTypes from '../actions/types'

const INITIAL_STATE =
{
	email : '',
	password : '',
	user : null,
	error : '',
	loading : false
}

export default ( state = INITIAL_STATE, action ) =>
{
	switch( action.type )
	{
		case actionTypes.EMAIL_CHANGED :
			return { ...state, email : action.payload };

		case actionTypes.PASSWORD_CHANGED :
			return { ...state, password : action.payload }

		case actionTypes.LOGIN_USER_SUCCESS :
			return { ...state, ...INITIAL_STATE , user : action.payload,  }

		case actionTypes.LOGIN_USER_FAIL :
			return { ...state, error : 'Authentification failed', password : '', loading : false }

		case actionTypes.LOGIN_USER_START :
			return { ...state, loading : true, error : '' }

		default :
			return state;
	}
}

/*
! With React, if the old state === the new state, then the component is not rendered again so with Redux, you have to be very careful when you modify the value of the state inside a reducer because in JavaScript, this will work :

const state = {}
const newState = state

newStata.color = 'red'

newState === state // This will work because state and newState are referencing the same object
*/