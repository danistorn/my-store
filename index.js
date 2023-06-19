const express = require ('express');
const routerApi = require ('/routes'); //nos traemos la función que escribimos en users.route


//Una importación del tipo ECMAScript6 seria tipo "import{} ..."
//pero acá estoy en JAVASCRIPT en general asi que se usa con una constante y require como dice arriba..


const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req res) => {
  res.send('Hola, soy una nueva ruta');
});


routerApi(app);

