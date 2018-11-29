import axios from 'axios';
import reverseGeocode from 'latlng-to-zip'
import qs from 'qs'
import { Location } from 'expo'

import types from './types';
import datas from '../assets/sensibleInformations';
import indeedDatas from '../assets/indeedJobsData.json';

const JOB_QUERRY_PARAMS =
{
	publisher : datas.indeedAPIKey,
	format : 'json',
	v : '2',
	latlong : 1,
	radius : 10,
	q : 'javascript'
}

const INDEED_URL = 'http://api.indeed.com/ads/apisearch?'

module.exports =
{
	fetchJobs : region => async dispatch =>
	{
		try
		{
			let zipcode = await Location.reverseGeocodeAsync( region );
			const url = buildJobsURL( zipcode );

			// let { data } = await axios.get( url ); //There's a problem with the api so we take a workarround with indeedDatas

			dispatch( { type : types.FETCH_JOBS, payload : indeedDatas } );
		}
		catch( error ) { console.error( error ) }
	}
}

const buildJobsURL = zipcode =>
{
	const query = qs.stringify( { ...JOB_QUERRY_PARAMS, l : zipcode } );

	return `${ INDEED_URL }${ JOB_QUERRY_PARAMS }`;
}