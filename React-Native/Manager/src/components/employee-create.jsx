import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button } from './common'
import { employeeUpdate, employeeCreate } from '../actions/employee-actions';
import EmployeeForm from './employee-form';

class EmployeeCreate extends Component
{
	onButtonPressed()
	{
		const { name, phone, shift } = this.props;

		this.props.employeeCreate( { name, phone, shift : shift || 'Monday' } );
	}

	render()
	{
		return 	(
					<Card>

						<EmployeeForm { ...this.props } />

						<CardSection>

							<Button whenPressed={ this.onButtonPressed.bind( this ) }>Create</Button>

						</CardSection>

					</Card>
				);
	}
}

const mapStateToProps = state =>
{
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
}

export default connect( mapStateToProps, { employeeUpdate, employeeCreate } )( EmployeeCreate );