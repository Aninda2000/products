const express= require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');

app.use(express.urlencoded({extended:true}));

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log("error in starting the server");
    }
    console.log("server is listening to the port :", port);
})