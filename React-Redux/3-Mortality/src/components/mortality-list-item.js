import React from 'react';

import Flag from './flag';

const MortalityListItem = () =>
{
	return(
		<div>

			<Flag
				country={ 'France' }
				className={ 'flag_medium' }
			/>

		</div>
	);
}

export default MortalityListItem;