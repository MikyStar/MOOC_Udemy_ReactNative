import React from 'react';
import { View, Text } from 'react-native'
import { Button as ButtonRNE } from 'react-native-elements' // The alias here is not necessary, but if someday there's the same name in my imports, I can distinguish with that
import Header from './components/header'
import TaskList from './components/task-list'
import ButtonAddTask from './components/button-add-task'

const tasks =
[
	{
		id : 0,
		content : 'First',
		status : 'En cours'
	},
	{
		id : 1,
		content : 'Second',
		status : 'En cours'
	},
	{
		id : 2,
		content : 'Third',
		status : 'Terminé'
	},
]

export default class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = { tasks }; // State is immutable, the constructor is the only place where I can directly access and assign it's value, otherwise we have to pass through setter
	}

	render()
	{
		return (
			<View>
				<Header content="Liste de tâches " content2="en props !" />

				<TaskList taskList={ this.state.tasks } />

				<ButtonAddTask />
			</View>
		);
	}
}