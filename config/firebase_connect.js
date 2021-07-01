var admin = require('firebase-admin');
var serviceAccount  = require('./prueba-node-ad4a0-firebase-adminsdk-f3ysb-c223f4c374.json');

admin.initializeApp({
    credential : admin.credential.cert(serviceAccount),
    databaseURL: 'https://prueba-node-ad4a0-default-rtdb.firebaseio.com/'
});


module.exports =admin;