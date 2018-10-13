import React, { Component } from 'react'

class SearchBar extends Component
{
	constructor(props)
	{
		super(props);

		this.state =
		{
			searchText : "",
			placeHolder : "Rentrer votre film ..."
		}
	}


	handleChange = event =>
	{
		this.setState( { searchText: event.target.value } );
	}

	/////////////////////

	render()
	{
		return (
				<div>

					<input
						onChange={ this.handleChange }
						placeholder={ this.state.placeHolder }
					/>

					<p>{ this.state.searchText }</p>

				</div>
		)
	}
}

export default SearchBar;