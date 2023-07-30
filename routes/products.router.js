const express = require('express');
const { faker } = require('@faker-js/faker');


//como aqui no tenemos acceso a la aplicación creo un router propio.
//y abajo, en vez de app.get uso router.get
const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
      products.push({
          name: faker.commerce.productName(),
          price: parseInt(faker.commerce.price(), 10),
          image: faker.image.imageURL
      });
  }
  res.json(products);
});


router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Poduct 2',
    price: 2000,
    image:"",
  });
});


router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
})


//lo hacemos un modulo exportable:
module.exports = router;
