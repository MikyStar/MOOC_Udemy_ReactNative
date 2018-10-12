import React from 'react';
import { View, ScrollView } from 'react-native'
import { Button as ButtonRNE } from 'react-native-elements' // The alias here is not necessary, but if someday there's the same name in my imports, I can distinguish with that
import lodash from 'lodash'

import Header from './components/header'
import TaskList from './components/task-list'
import ButtonAddTask from './components/button-add-task'
import MenuTask from './components/menu-task'
import { TaskStatus } from './model'
import TextPrompt from './components/text-prompt'

export default class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			tasks : [],
			isMenuTaskVisible : false,
			currentTask : {},
			isAddPrompVisible : false,
			idGenerator : 0,
			isRenamePromptVisible : false
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

	toggleTaskStatus = () =>
	{
		const updatedTask = this.state.currentTask;
		updatedTask.status = this.state.currentTask.status === TaskStatus.done ? TaskStatus.todo : TaskStatus.done;

		const index = lodash.findIndex( this.state.tasks, { id: this.state.currentTask.id } );
		const copyTasks = this.state.tasks;

		copyTasks[index] = updatedTask;

		this.setState( { taskList : copyTasks, isMenuTaskVisible : false, currentTask : {} } )
	}

	hideAddPrompt = () =>
	{
		this.setState( { isAddPrompVisible : false } )
	}

	onAddTask = value =>
	{
		const newTask =
		{
			id : this.state.idGenerator,
			content : value,
			status : TaskStatus.todo
		}

		this.setState(
		{
			tasks: [...this.state.tasks, newTask], // It's called destructuration : Basically, with ... I'm exploding my array and then with the , I'm putting an other element to the new array created between [ ]
			isAddPrompVisible : false,
			idGenerator : this.state.idGenerator + 1 // Because with ++ it would have try to increment the value of idGenerator which is forbidden; you have to go through setState to change a state attribute
		})
	}

	hideRenamePrompt = () =>
	{
		//TODO
	}

	onRenamePrompt = value =>
	{
		//TODO
	}

	displayRenameTask = task =>
	{
		this.setState(
		{
			currentTask : task,
			isRenamePromptVisible : true
		})
	}

	displayAddPrompt = () =>
	{
		this.setState( { isAddPrompVisible : true } )
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
						onLongPressCallback={ this.displayRenameTask }
					/>
				</ScrollView>

				<MenuTask
					isVisible={ this.state.isMenuTaskVisible }
					onDisapearCallback={ this.toggleMenuTaskVisibility }
					onDeleteCallback={ this.deleteCurrentTask }
					onChangeStatusCallback={ this.toggleTaskStatus }
				/>

				<TextPrompt
					isVisible={ this.state.isAddPrompVisible }
					onCancelCallback={ this.hideAddPrompt }
					onSubmitCallback={ this.onAddTask }
					title='Ajouter une nouvelle tâche'
					placeHolder='Exemple : Faire les courses'
					defaultValue=''
				/>

				<TextPrompt
					isVisible={ this.state.isRenamePromptVisible }
					onCancelCallback={ this.hideRenamePrompt }
					onSubmitCallback={ this.onRenamePrompt }
					title='Renommer la tâche'
					placeHolder=''
					defaultValue={ this.state.currentTask.content }
				/>

				<ButtonAddTask
					onPressCallback={ this.displayAddPrompt }
				/>
			</View>
		);
	}
}