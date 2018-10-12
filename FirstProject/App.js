import React from 'react';
import { View, ScrollView } from 'react-native'
import { Button as ButtonRNE } from 'react-native-elements' // The alias here is not necessary, but if someday there's the same name in my imports, I can distinguish with that
import lodash from 'lodash'

import Header from './components/header'
import TaskList from './components/task-list'
import ButtonAddTask from './components/button-add-task'
import MenuTask from './components/menu-task'

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
		this.state =
		{
			tasks,
			isMenuTaskVisible : false,
			currentTask : {}
		};
	}

	displayMenuTask = ( taskContent ) =>
	{
		console.log('onPress', taskContent )
	}

	toggleMenuTaskVisibility = ( task ) =>
	{
		let currentTask = task;

		if(this.state.isMenuTaskVisible)
			currentTask = {}

		this.setState(
		{
			isMenuTaskVisible : !this.state.isMenuTaskVisible,
			currentTask
		})
	}

	deleteCurrentTask = () =>
	{
		const index = lodash.findIndex( this.state.tasks, { id : this.state.currentTask.id } );
		const copyTasks = this.state.tasks;

		copyTasks.splice(index, 1); // = You suppress 1 element at the position index

		this.setState(
		{
			tasks : copyTasks,
			currentTask : {}
		});

		this.toggleMenuTaskVisibility();
	}

	render()
	{
		return (
			<View style={ { flex : 1 } }> { /* flex 1 means that the view is taking 100% of the screen, like weights in Android */ }
				<Header content="Liste de tâches " content2="en props !" />

				<ScrollView>
					<TaskList
						taskList={ this.state.tasks }
						onPressCallback={ this.toggleMenuTaskVisibility }
					/>
				</ScrollView>

				<MenuTask
					isVisible={ this.state.isMenuTaskVisible }
					onDisapearCallback={ this.toggleMenuTaskVisibility }
					onDeleteCallback={ this.deleteCurrentTask }
				/>

				<ButtonAddTask />
			</View>
		);
	}
}