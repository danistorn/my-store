const express = require ('express');
// const routerApi = require ('/routes'); //nos traemos la función que escribimos en users.route
const app = express();
const port = 3000;


//Una importación del tipo ECMAScript6 seria tipo "import{} ..."
//pero acá estoy en JAVASCRIPT en general asi que se usa con una constante y require como dice arriba..


app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});


routerApi(app);

app.listen(port, () => {
  console.log('Mi port' + port);
});
