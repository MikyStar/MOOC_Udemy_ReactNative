import React from 'react'
import axios from 'axios'

import SearchBar from '../components/search-bar'
import VideoList from '../containers/video-list'
import datas from '../../sensibleInformations'
import VideoDetail from '../components/video-detail'
import Video from '../components/video'

class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			movieList : {},
			currentMovie : {}
		};

		this.retrieveMoviesFromAPI();
	}

	retrieveMoviesFromAPI = () =>
	{
		axios.get( `${datas.API_END_POINT}${datas.POPULAR_MOVIES_URL}&${datas.API_KEY}` ).then(
			( response ) =>
			{
				this.setState(
				{
					movieList: response.data.results.slice( 1, 6 ), // To only get the 5 first items
					currentMovie: response.data.results[0]
				}, () =>
				{
					this.applyVideoToCurrentMovie();
				})
			}
		);
	}

	applyVideoToCurrentMovie()
	{
		axios.get( `${datas.getURLMovieGivenID(this.state.currentMovie.id)}` ).then(
			( response ) =>
			{
				const youtubeKey = response.data.videos.results[0].key;
				let newCurrentMovieState = this.state.currentMovie;
				newCurrentMovieState.videoID = youtubeKey;

				this.setState( { currentMovie : newCurrentMovieState } );
				console.log(this.state)
			}
		);


		// console.log("test", datas.getURLMovieGivenID(this.state.currentMovie.id) )
	}

	render()
	{
		const renderVideoList = () =>
		{
			if(this.state.movieList.length >= 5)
				return <VideoList movieList={this.state.movieList} />
		}

		return (
			<div>
				<div className='search_bar'>
					<SearchBar />
				</div>

				<div className='row'>

					<div className='col-md-8'>
						<Video videoID={ this.state.currentMovie.videoID } />

						<VideoDetail
							title={this.state.currentMovie.title}
							description={this.state.currentMovie.overview}
						/>
					</div>

					<div className='col-md-4'>
						{ renderVideoList() }
					</div>

				</div>

			</div>
		);
	}
}

export default App;