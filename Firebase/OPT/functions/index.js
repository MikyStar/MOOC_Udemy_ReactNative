const { onRequest } = require("firebase-functions").https;

module.exports =
{
	helloWorld : onRequest( ( resuest, response) =>
	{
		response.send( 'Hello from Firebase !' );
	}),

	goodBye : onRequest( ( request, response ) =>
	{
		response.send( ' Seeya !' );
	})
}