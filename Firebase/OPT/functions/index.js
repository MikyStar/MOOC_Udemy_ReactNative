const admin = require('firebase-admin');
const { onRequest } = require("firebase-functions").https;

const createUser = require('./create-user');
const serviceAccount = require('./assets/credentials.json');

/**
 * Allows us to access Firebase things like database for instance
 */
admin.initializeApp(
{
	credential: admin.credential.cert( serviceAccount ),
	databaseURL: "https://mooc-reactnative-otp.firebaseio.com"
} );

module.exports =
{
	createUser : onRequest( createUser )
}