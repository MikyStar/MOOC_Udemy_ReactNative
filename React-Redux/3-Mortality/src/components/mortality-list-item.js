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
				data={ [ [12, 13], [17, 10], [12, 16], [2, 10] ] }
			/>

		</div>
	);
}

export default MortalityListItem;