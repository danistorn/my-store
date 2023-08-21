const express = require ('express');
const cors = require('cors');

const routerApi = require('./routes'); //nos traemos la función de index.js router
// const routerApi = require ('/routes'); //nos traemos la función que escribimos en users.route

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');


const { faker }  = require('faker');


const app = express();
const port = 3000;



//Una importación del tipo ECMAScript6 seria tipo "import{} ..."
//pero acá estoy en JAVASCRIPT en general asi que se usa con una constante y require como dice arriba..

app.use(express.json());

const whitelist = ['http://localhost:8080', 'http://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));





app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});


//definimos la ruta:
routerApi(app);


app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
})









app.listen(port, () => {
  console.log('Mi port' + port);
});


//Nuevo endpoint
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;  //tendra parámetros tipo query
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
});
