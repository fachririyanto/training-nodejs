require( 'dotenv' ).config();

module.exports = {
    cluster: process.env.NODE_MONGODB_CLUSTER,
    username: process.env.NODE_MONGODB_USER,
    password: process.env.NODE_MONGODB_PASS,
};