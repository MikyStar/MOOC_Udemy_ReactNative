import React, { Component } from 'react'
import { Text } from 'react-native';
import { CardSection } from './common';

class EmployeeListItem extends Component
{
	render()
	{
		const { name } = this.props.employee;

		return 	(
					<CardSection>
						<Text style={ styles.title }>{ name }</Text>
					</CardSection>
				);
	}
}

const styles =
{
	title :
	{
		fontSize : 18,
		paddingLeft : 15
	}
}

export default EmployeeListItem;