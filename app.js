const express = require('express');

const app = express();

// Code a simple GET API
// http://localhost:4300/simple-nodejs-app/api/v1/hello
// https://zainuddin.com/simple-nodejs-app/api/v1/hello
app.get('/simple-nodejs-app/api/v1/hello', function(req,res){
    res.send(' Hello world');
})

app.listen(4300, () => {
    console.log('Server has started!')
})