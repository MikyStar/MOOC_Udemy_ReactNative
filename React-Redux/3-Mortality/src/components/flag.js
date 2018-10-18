import React from 'react';

import urlManager from '../assets/urlManager'

const Flag = ( { country, className } ) =>
{
	return (
		<div>

			<img
				className={ className }
				src={ urlManager.getFlag( country ) }
			/>

		</div>
	);
}

export default Flag;