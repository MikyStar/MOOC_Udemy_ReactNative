import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getCountries } from '../actions/index'


class SearchBar extends Component
{
	componentWillMount = () =>
	{
		this.props.getCountries();
	}

	render()
	{
		return (
			<div>

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