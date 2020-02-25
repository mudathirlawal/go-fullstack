const express = require( 'express' );
const app = express();

app.use( ( request, response ) => {
    response.json( { message: 'Your request was successful!' } );
} );
module.exports = app;
