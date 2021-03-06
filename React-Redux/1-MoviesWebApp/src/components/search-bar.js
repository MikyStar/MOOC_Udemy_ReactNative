import React, { Component } from 'react'

class SearchBar extends Component
{
	constructor(props)
	{
		super(props);

		this.state =
		{
			searchText : "",
			placeHolder : "Rentrer votre film ...",
			intervalBeforeRequest : 1000,
			lockRequest : false
		}
	}


	handleChange = event =>
	{
		this.setState( { searchText: event.target.value } );

		if( !this.state.lockRequest )
		{
			this.setState( { lockRequest : true} );
			setTimeout( () => this.search(), this.state.intervalBeforeRequest );
		}
	}

	handleOnClick = event =>
	{
		this.search();
	}

	search = () =>
	{
		this.props.callback( this.state.searchText );
		this.setState( { lockRequest : false  } )
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