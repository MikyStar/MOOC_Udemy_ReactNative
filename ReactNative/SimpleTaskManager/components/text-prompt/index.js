import React from 'react'
import Prompt from 'rn-prompt'

export default TextPrompt = ( { isVisible, title, placeHolder, defaultValue, onCancelCallback, onSubmitCallback } ) =>
(
	<Prompt
		title={ title }
		placeholder={ placeHolder }
		defaultValue={ defaultValue }
		visible={ isVisible }
		onCancel={ () => onCancelCallback() }
		onSubmit={ value => onSubmitCallback( value ) }
	/>
);