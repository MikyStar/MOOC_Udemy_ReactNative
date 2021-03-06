import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'

import { Card, CardSection, Button } from './common';
import EmployeeForm from './employee-form';
import { employeeUpdate } from '../actions/employee-actions';

class EmployeeEdit extends Component
{
	componentWillMount()
	{
		_.each( this.props.employee, ( value, key ) =>
		{
			this.props.employeeUpdate( { key, value } );
		})
	}

	onButtonPressed()
	{
		const { name, phone, shift } = this.props;

		console.log( name, phone, shift );
	}

	render()
	{
		return	(
					<Card>

						<EmployeeForm />

						<CardSection>
							<Button whenPressed={ this.onButtonPressed.bind( this ) }>Save changes</Button>
						</CardSection>

					</Card>
				);
	}
}

const mapStateToProps = state =>
{
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect( mapStateToProps, { employeeUpdate })( EmployeeEdit );