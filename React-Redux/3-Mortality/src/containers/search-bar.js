import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getCountries } from '../actions/index'
import { th } from 'redux-thunk';

class SearchBar extends Component
{
	constructor( props)
	{
		super( props );
		this.state = { selectedCountry : this.props.defaultCountry }
	}

	componentWillMount = () =>
	{
		this.props.getCountries();
	}

	renderSelectBox()
	{
		const { countries } = this.props;

		if( countries )
		{
			return (
				<select
					value={ this.state.selectedCountry }
					className='col-lg-12 input-group'
					onChange={ (e) => this.search( e )}
				>
					{
						countries.map( country =>
						{
							return <option key={ country } value={ country }>{ country }</option>
						})
					}
				</select>
			);
		}
		else
		{
			return (
				<div>No country found</div>
			)
		}
	}

	search( event )
	{
		this.setState( { selectedCountry : event.target.value } )
	}

	render()
	{
		return (
			<div className='search-bar'>

				{ this.renderSelectBox() }

			</div>
		)
	}
}

const mapStateToProps = ( state ) =>
{
	return {
		countries: state.countries
	}
}

const mapDispatchToProps = ( dispatch ) =>
{
	return bindActionCreators( { getCountries }, dispatch ) // { getCountries } = { getCountries : getCountries }
}

export default connect( mapStateToProps, mapDispatchToProps )( SearchBar );