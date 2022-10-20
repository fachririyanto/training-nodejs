const { MongoClient } = require( 'mongodb' );
const { cluster, username, password } = require( './config' );

// connect to mongodb cloud
const uri    = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient( uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} );

module.exports = {
    mongodbClient: client,
};