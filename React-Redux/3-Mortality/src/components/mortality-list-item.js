import React from 'react';
import ReactChartkick, { ColumnChart } from 'react-chartkick'
import Chart from 'chart.js'

import Flag from './flag';

ReactChartkick.addAdapter( Chart );

const xTitle = 'Age';
const yTitle = '% de mortalité';

const MortalityListItem = ( { mortality } ) =>
{
	const formatedDataMale = formatMortalityData( mortality.male )
	const formatedDataFemale = formatMortalityData( mortality.female )

	return(
		<tr>

			<td>
				<Flag
					country={ mortality.country }
					className={ 'flag_medium' }
				/>
			</td>

			<td className='col-md-6'>
				<ColumnChart
					data={ formatedDataMale }
					xtitle={ xTitle }
					ytitle={ yTitle }
				/>
			</td>

			<td className='col-md-6'>
				<ColumnChart
					data={formatedDataFemale }
					xtitle={ xTitle }
					ytitle={ yTitle }
				/>
			</td>

		</tr>
	);
}

const formatMortalityData = ( mortality ) =>
{
	const filteredData = mortality.filter( data =>
	{
		if( data.age >= 101 )
			return false
		else
			return data
	});

	const array = filteredData.map( data =>
	{
		return [ `${data.age}`, data.mortality_percent ]
	})

	return array;
}

export default MortalityListItem;