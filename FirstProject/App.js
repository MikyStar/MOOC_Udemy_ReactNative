import React from 'react';
import { View, ScrollView } from 'react-native'
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
	{
		id : 3,
		content : 'Third',
		status : 'Terminé'
	},
	{
		id : 4,
		content : 'Third',
		status : 'Terminé'
	},
	{
		id : 5,
		content : 'Third',
		status : 'Terminé'
	},
	{
		id : 6,
		content : 'Third',
		status : 'Terminé'
	},
	{
		id : 7,
		content : 'Third',
		status : 'Terminé'
	},
	{
		id : 8,
		content : 'Third',
		status : 'Terminé'
	},
	{
		id : 9,
		content : 'Third',
		status : 'Terminé'
	},
	{
		id : 10,
		content : 'Third',
		status : 'Terminé'
	},
	{
		id : 11,
		content : 'Third',
		status : 'Terminé'
	},
	{
		id : 12,
		content : 'Third',
		status : 'Terminé'
	},
	{
		id : 13,
		content : 'Third',
		status : 'Terminé'
	},
	{
		id : 14,
		content : 'Third',
		status : 'Terminé'
	},
	{
		id : 15,
		content : 'Third',
		status : 'Terminé'
	},
	{
		id : 16,
		content : 'Sixteen',
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
			<View style={ { flex : 1 } }> { /* flex 1 means that the view is taking 100% of the screen, like weights in Android */ }
				<Header content="Liste de tâches " content2="en props !" />

				<ScrollView>
					<TaskList taskList={ this.state.tasks } />
				</ScrollView>

				<ButtonAddTask />
			</View>
		);
	}
}