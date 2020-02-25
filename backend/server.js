
const http = require( 'http' );
const server = http.createServer( ( request, response ) => {
    response.end( '\n\tThis is my server response.\n' );
} );
