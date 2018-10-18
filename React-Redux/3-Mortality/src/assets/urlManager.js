module.exports =
{
	API_POPULATION_ENDPOINT: "http://api.population.io:80/1.0/",

	getCountryList : () => { return `${module.exports.API_POPULATION_ENDPOINT}countries` },
	getMortality : ( country, genre, age, when ) =>
	{
		return `${module.exports.API_POPULATION_ENDPOINT}mortality-distribution/${country}/${ genre = 'male' }/${ age = 25 }/${ when = 'today' }`
	}
}