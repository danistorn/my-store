const express = require ('express');
const routerApi = require('./routes'); //nos traemos la función de index.js router
// const routerApi = require ('/routes'); //nos traemos la función que escribimos en users.route


const { faker } = require('@faker-js/faker');




const app = express();
const port = 3000;



//Una importación del tipo ECMAScript6 seria tipo "import{} ..."
//pero acá estoy en JAVASCRIPT en general asi que se usa con una constante y require como dice arriba..

app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});


//definimos la ruta:
routerApi(app);


app.get('/products', (req, res) => {
  const products = [];
  for (let index = 0; index < 100; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});



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
