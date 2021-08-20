require('dotenv').config()

if(process.env.NODE_ENV === 'production') {
    module.exports = { mongoURI: process.env.DB }; // Add your remote db connection string here
} else {
    module.exports = { mongoURI: 'mongodb://127.0.0.1:27017' }; // Add your local db connection string here
}