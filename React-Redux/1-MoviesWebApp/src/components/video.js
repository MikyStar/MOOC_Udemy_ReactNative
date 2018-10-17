import React from 'react'

import datas from '../../sensibleInformations'

const Video = ( { videoID } ) =>
{
	return(
		<div className='embed-responsive embed-responsive-16by9'>

			<iframe className='embed-responsive-item' src={ `${datas.YOUTUBE_BASE_URL}${videoID}` } />

		</div>
	);
}

export default Video;