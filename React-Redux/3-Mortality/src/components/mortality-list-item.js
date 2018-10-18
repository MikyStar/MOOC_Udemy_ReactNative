import React from 'react';
import ReactChartkick, { ColumnChart } from 'react-chartkick'
import Chart from 'chart.js'

import Flag from './flag';

ReactChartkick.addAdapter( Chart );

const MortalityListItem = () =>
{
	return(
		<div>

			<Flag
				country={ 'France' }
				className={ 'flag_medium' }
			/>

			<ColumnChart
				data={ [ ['12', 13], [14, 10], [17, 16], [28, 10] ] }
			/>

		</div>
	);
}

export default MortalityListItem;