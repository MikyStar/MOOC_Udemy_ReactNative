import axios from 'axios'

import urlManager from '../assets/urlManager'

export const GET_COUNTRIES = "GET_COUNTRIES"
export const ERROR_GET_COUNTRIES = "ERROR_GET_COUNTRIES"
export const GET_MORTALITY = "GET_MORTALITY"

/**
 * Redux is not able to handle asynchronous.
 * Thanks to Redux-Thunk we can make it do that.
 * So basically, here we have created a middleware between the action and all reducers. This middleware says you know what don't give me an action, just give me the function and giving that we are doing something asynchronous, whenever the action is done, I will send the proper action to all reducers
 */
export function getCountries()
{
	return function ( dispatch )
	{
		axios( urlManager.getCountryList() ).then(
		( response ) =>
		{
			console.log( 'response', response.data.countries );

			dispatch(
			{
				type : GET_COUNTRIES,
				payload : response.data.countries
			});
		}
		).catch( ( error ) =>
		{
			dispatch(
			{
				type : ERROR_GET_COUNTRIES,
				error : error.response.data.detail
			});
		})
	}
}

export function getMortality( country )
{
	return function ( dispatch )
	{
		return axios( urlManager.getMortality(country, 'male') ).then(
			( responseMale ) =>
			{
				axios( urlManager.getMortality( country, 'female' ) ).then(
				( responseFemale ) =>
				{
					console.log('male', responseMale);
					console.log('female', responseFemale);

					dispatch(
					{
						type : GET_MORTALITY,
						payload :
						{
							country : country,
							male : responseMale.data.mortality_distribution,
							female : responseFemale.data.mortality_distribution
						}
					})
				})
			}
		);
	}
}