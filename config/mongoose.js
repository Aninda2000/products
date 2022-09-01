const mongoose= require('mongoose');
const db=mongoose.connection;

mongoose.connect('mongodb://localhost/product_Collection');

db.on('error', console.error.bind(console, "Error connecting to MongoDb"));
db.once('open', function(){
    console.log('connected to mongodb database successfully');
});

module.exports =db;