import React from 'react'

import datas from '../../sensibleInformations'

const Video = ( { videoID } ) =>
{
	return(
		<div>

			<iframe src={ `${datas.YOUTUBE_BASE_URL}${videoID}` } />

		</div>
	);
}

export default Video;