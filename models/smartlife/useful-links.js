const { mongodbClient } = require( '../../drivers/mongodb' );

const database   = mongodbClient.db( 'smartlife' );
const collection = database.collection( 'useful_links' );

// find multiple data
async function getUsefulLinks( query = {} ) {
    console.log( 'Loading...' );

    try {
        const cursor = collection.find( query );
        const links  = await cursor.toArray();

        console.log( 'Loaded', links );
    } catch ( err ) {
        console.log( 'error', err );
    }
}

// find one data
async function getUsefulLink( query = {} ) {
    console.log( 'Loading...' );

    try {
        const link = await collection.findOne( query );

        console.log( 'Loaded', link );
    } catch ( err ) {
        console.log( 'error', err );
    }
}

// create new date
async function addUsefulLink( args ) {
    console.log( 'Loading...' );

    try {
        const result = await collection.insertOne( args );

        console.log( 'Loaded', result );
    } catch ( err ) {
        console.log( 'error', err );
    }
}

module.exports = {
    getUsefulLinks,
    getUsefulLink,
    addUsefulLink,
};