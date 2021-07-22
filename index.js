const express = require('express');
const path = require('path');

const app = express();

//Rutas de las secciones 
const index = require('./src/routes/index');
//Configuracion del server
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine','ejs');


app.use(index);


app.listen(3000, () => {
    console.log('Listening on port 3000');
});