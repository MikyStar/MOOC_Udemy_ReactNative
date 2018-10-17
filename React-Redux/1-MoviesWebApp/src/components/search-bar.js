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
				<div className='row'>{/* Given that 'class' is already used in React, for CSS we have to use 'className' */}

					<div className="col-md-8">{/* In Bootstrap everything is out of 12, so here we say you're a column of 8/12 */}

						<input
							onChange={ this.handleChange }
							placeholder={ this.state.placeHolder }
							type='text'
							className='form-control input-lg'
						/>

					</div>

				</div>
		)
	}
}

export default SearchBar;