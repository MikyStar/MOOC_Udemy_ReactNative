const admin = require( 'firebase-admin' );

module.exports = ( request, response) =>
{
	if( !request.body.phone )
		return response.status( 442 ).send( { error : 'You must provide a phone number' });

	const phone = String( request.body.phone ).replace( /[^\d]/g, '' ); // Keep only digits

	admin.auth().getUser( phone )
		.then( user =>
		{
			const code = Math.floor( ( Math.random() * 10000 + 1000) );

			// I don't want to do a Twilio Integration for using SMS so I'm going to cheat

			admin.database().ref( `users/${ phone }` )
				.update( { code, codeValid : true }, () =>
				{
					response.send( { success : true, code } );
				})
		})
		.catch( error => response.status( 422 ).send( { error : 'User not found' } ) )
}