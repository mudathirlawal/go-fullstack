
const app = require( './app' );
const http = require( 'http' );
const server = http.createServer( ( request, response ) => {
    response.end( '\n\tThis is my server response.\n' );
} );
server.listen( process.env.PORT || 3000 );
