import React from 'react';
import { List, ListItem, Badge } from 'react-native-elements';

import { TaskStatus } from '../../model'
import COLORS from '../../styles/colors'
import { style } from './style'

export default TaskList = ( { taskList } ) =>
(
	<List containerStyle={ style.list }> { /* To overide the default margin top from RNE */ }
		{
			taskList.map( ( task ) =>
			(
				<ListItem
					key={ task.id }
					title={ task.content }
					badge={
						{
							element :	<Badge
											value={ task.status }
											containerStyle={
												task.status === TaskStatus.todo ? { backgroundColor: COLORS.red } : { backgroundColor : COLORS.green }
											}
										/>
						}
					}
				/>
			))
		}
	</List>
);