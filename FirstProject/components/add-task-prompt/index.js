import React from 'react'
import Prompt from 'rn-prompt'

export default AddTaskPrompt = ( { isVisible, onCancelCallback, onSubmitCallback } ) =>
(
	<Prompt
		title="Ajouter une nouvelle tâche"
		placeholder="Exemple : Faire les courses"
		defaultValue=""
		visible={ isVisible }
		onCancel={ () => onCancelCallback() }
		onSubmit={ value => onSubmitCallback( value ) }
	/>
);