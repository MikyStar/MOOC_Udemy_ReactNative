import React from 'react'
import datas from '../../sensibleInformations'

const VideoListItem = ( props ) =>
{
	const { movie } = props;

	return (
		<li
			className='list-group-item'
			onClick={handleOnClick}
		>

			<div className='media'>

				<div className='media-left'>

					<img
						src={`${datas.IMAGE_BASE_URL}${movie.poster_path}`}
						height="120px"
						width="100px"
						className='media-object img-rounded'
					/>

				</div>

				<div className='media-body'>
					<h5 className='title_list_item'>{movie.title}</h5>
				</div>

			</div>
		</li>
	)

	function handleOnClick()
	{
		props.callback(movie); //send the movie to parent conponent through a callback named callback
	}

}

// It's better to directly explose the props element with the {} writing because props are read only, so if someday I want to change the value of a props, it's the only way to de it

export default VideoListItem;