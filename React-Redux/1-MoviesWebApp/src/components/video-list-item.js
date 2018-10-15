import React from 'react'
import datas from '../../sensibleInformations'

const VideoListItem = ( { movie } ) => // { movie } = let movie = props.movie
{
	return (
		<li>
			<img
				src={ `${ datas.IMAGE_BASE_URL }${ movie.poster_path }` }
				height="120px"
				width="100px"
			/>
			<h3>{movie.title}</h3>
		</li>
	);
}

// It's better to directly explose the props element with the {} writing because props are read only, so if someday I want to change the value of a props, it's the only way to de it

export default VideoListItem;