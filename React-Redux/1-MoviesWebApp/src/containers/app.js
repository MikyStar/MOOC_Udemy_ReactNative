import React from 'react'
import axios from 'axios'

import SearchBar from '../components/search-bar'
import VideoList from '../containers/video-list'
import datas from '../../sensibleInformations'
import VideoDetail from '../components/video-detail'

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
						movies: response.data.results.slice( 1, 6 ),
						currentMovie: response.data.results[0]
					} ) // To only get the 5 first items
				console.log( this.state )
			}
		);
	}

	render()
	{
		return (
			<div>
				<SearchBar />
				<VideoList />
				<VideoDetail
					title={ this.state.currentMovie.title }
					description={ this.state.currentMovie.overview }
				/>
			</div>
		);
	}
}

export default App;