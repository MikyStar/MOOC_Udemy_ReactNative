import React from 'react'

const VideoListItem = ( { movie } ) => // { movie } = let movie = props.movie
{
	return <li>Un film recommandé : { movie.title } </li>
}

// It's better to directly explose the props element with the {} writing because props are read only, so if someday I want to change the value of a props, it's the only way to de it

export default VideoListItem;