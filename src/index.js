const express = require('express');
const path = require('path');
const app = express();


//setting
app.set('port', process.env.PORT || 3000);

//middleware

//routes
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'/views/index.html'));

})

//static files

//server
app.listen (app.get('port'), () => {
    console.log('server', app.get('port'));
});
