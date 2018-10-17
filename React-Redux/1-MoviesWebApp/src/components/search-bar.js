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

	handleOnClick = event =>
	{
		this.props.callback(this.state.searchText)
	}

	/////////////////////

	render()
	{
		return (
				<div className='row'>{/* Given that 'class' is already used in React, for CSS we have to use 'className' */}

					<div className="col-lg-8 input-group">{/* In Bootstrap everything is out of 12, so here we say you're a column of 8/12 */}

						<input
							onChange={ this.handleChange }
							placeholder={ this.state.placeHolder }
							type='text'
							className='form-control input-lg'
						/>

						<span className='input-group-btn'>
							<button className='btn btn-secondary' onClick={ this.handleOnClick }>Go</button>
						</span>

					</div>

				</div>
		)
	}
}

export default SearchBar;