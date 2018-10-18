import { combineReducers } from 'redux';

import CountriesReducer from './countries-reducer'

const rootReducer = combineReducers(
{
	countries : CountriesReducer
});

export default rootReducer;