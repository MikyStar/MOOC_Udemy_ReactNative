import React from 'react';

import Header from './components/header'

export default class App extends React.Component
{
	render()
	{
		return (
			<Header content="Liste de tâches " content2="en props !" />
		);
	}
}