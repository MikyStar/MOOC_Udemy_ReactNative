const admin = require( 'firebase-admin' );

module.exports = ( request, response ) =>
{
	if( !request.body.phone )
		return response.status( 422 ).send( { error : 'Bad Input' });

	const phone = String( request.body.phone ).replace(/[^\d]/g, ''); // Keep only digits

	admin.auth().createUser( { uid : phone } )
		.then( user => response.send( user ) )
		.catch( error => response.status( 422 ).send( { error } ))
}