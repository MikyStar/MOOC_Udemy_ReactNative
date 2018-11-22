const admin = require( 'firebase-admin' );

module.exports = ( request, response ) =>
{
	if( !request.body.phone || !request.body.code )
		return response.status( 422 ).send( { error : 'Phone and code must be provided' } );

	const phone = String( request.body.phone ).replace( /[^\d]/g, '');
	const code = parseInt( request.body.code );

	admin.auth().getUser( phone )
		.then( () =>
		{
			const reference = admin.database().ref( `users/${ phone }` );

			reference.on( 'value', snapshot =>
			{
				reference.off(); // To stop listening to value changes

				const user = snapshot.val();

				if( user.code !== code || !user.codeValid )
					return response.status( 422 ).send( { error: 'Code not valid' } );

				reference.update( { codeValid : false } );

				admin.auth().createCustomToken( phone )
					.then( token => response.send( { token } ) )
					.catch( error => response.status( 422 ).send( { error: 'Error while generating the token' } ) )
			});
		})
		.catch( error => response.status( 422 ).send( { error: 'User not found' } ) )
}