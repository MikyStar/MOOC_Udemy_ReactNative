import React from 'react';
import { List, ListItem } from 'react-native-elements';

export default TaskList = ( { taskList } ) =>
(
	<List>
		{
			taskList.map( ( task ) =>
			{
				return <ListItem key={ task.id } title={ task.content } />
			})
		}
	</List>
);