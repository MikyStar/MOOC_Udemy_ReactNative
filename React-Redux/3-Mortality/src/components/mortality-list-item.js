import React from 'react';
import ReactChartkick, { ColumnChart } from 'react-chartkick'
import Chart from 'chart.js'

import Flag from './flag';

ReactChartkick.addAdapter( Chart );

const xTitle = 'Age';
const yTitle = '% de mortalité';

const MortalityListItem = () =>
{
	return(
		<tr>

			<td>
				<Flag
					country={ 'France' }
					className={ 'flag_medium' }
				/>
			</td>

			<td className='col-md-6'>
				<ColumnChart
					data={ [ ['12', 13], [14, 10], [17, 16], [28, 10] ] }
					xtitle={ xTitle }
					ytitle={ yTitle }
				/>
			</td>

			<td className='col-md-6'>
				<ColumnChart
					data={ [ ['12', 13], [14, 10], [17, 16], [28, 10] ] }
					xtitle={ xTitle }
					ytitle={ yTitle }
				/>
			</td>

		</tr>
	);
}

export default MortalityListItem;