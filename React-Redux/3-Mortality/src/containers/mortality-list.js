import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MortalityListItem from '../components/mortality-list-item';
import { getMortality } from '../actions/index';

class MortalityList extends Component
{
	renderMortalities()
	{
		const { mortalities } = this.props;

		return mortalities.map( data =>
		{
			return <MortalityListItem key={ data.country }/>
		})
	}

	render()
	{
		return (
			<div>

				<table className='table'>

					<thead>

						<tr>

							<th>Pays</th>
							<th className='col-md-6'>Hommes</th>
							<th className='col-md-6'>Femmes</th>

						</tr>

					</thead>

					<tbody>

						{ this.renderMortalities() }

					</tbody>

				</table>

			</div>
		)
	}
}

const mapStateToProps = ( state ) =>
{
	return {
		mortalities : state.mortality
	}
}

export default connect( mapStateToProps )( MortalityList );