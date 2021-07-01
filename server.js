const express = require('express');

const principalRoute = require('./app/routes/index')

const app = express();

const path = require('path')

//Configuraciones del servidor
const port = process.env.PORT||3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('views',path.join(__dirname,'app/views'));
app.set('view engine','ejs')
//Rutas
app.use(principalRoute);


app.listen(port,()=>{
    console.log("Server on port ",port);
})