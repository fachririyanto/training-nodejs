const express = require( 'express' );
const app     = express();
const port    = 3000;

const { getUsefulLinks, getUsefulLink, addUsefulLink } = require( './models/smartlife/useful-links' );

app.get( '/', ( req, res ) => {
    getUsefulLinks();

    res.send( 'Get useful links' );
} );

app.get( '/detail-link', ( req, res) => {
    getUsefulLink( { title: 'Medium' } );

    res.send( 'Get useful link' );
} );

app.get( '/create-one', ( req, res ) => {
    addUsefulLink( {
        title: 'Youtube',
        link: 'https://youtube.com',
    } );

    res.send( 'Insert one link' );
} );

app.listen( port, () => {
    console.log( `Example app listening on port ${port}` );
} );