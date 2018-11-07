import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native'
import _ from 'lodash' // Yes the convention wants us to use _ which is a low dash, lodash, see ?

import { employeesFetch } from '../actions/employee-actions';

class EmployeeList extends Component
{
	componentWillMount = () =>
	{
		this.props.employeesFetch();

		this.createDataSource( this.props );
	}

	// Lifecycle method
	componentWillReceiveProps( nextProps )
	{
		this.createDataSource( nextProps )
	}

	/**
	 * Calling this method both in cwm and cwrp enables us to always have an up to date data set no matter if the component will be created or anything else
	 */
	createDataSource( { employees } )
	{
		const dataSource = new ListView.DataSource(
			{
				rowHasChanged: ( r1, r2 ) => r1 !== r2
			} );

		this.dataSource = dataSource.cloneWithRows( employees );
	}

	render()
	{
		console.log( this.props)
		return	(
					<View>

					</View>
				);
	}
}

const mapStateToProps = state =>
{
	/*
		Create array out of object
		Put in the const employees an array of objects because map helps us go from a huge object which contains a lot of same objects to an array of those same objects
		state.employees has a lot objects which has a key (uid) and values (val)
		With that, create me a new object who contains all the values and the key inside of the object
	*/
	const employees = _.map( state.employees, ( val, uid ) =>
	{
		return { ...val, uid };
	});

	return { employees };
};

export default connect( mapStateToProps, { employeesFetch } )( EmployeeList )