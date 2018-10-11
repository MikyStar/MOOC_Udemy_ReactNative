import React from 'react';
import { List, ListItem } from 'react-native-elements';

export default TaskList = ( { taskList } ) =>
(
	<List>
		<ListItem title={ taskList[0].content } />
	</List>
);