const express = require('express');

const ProductsService = require('./../services/product.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema }  = require('./../schemas/product.schema');


//como aqui no tenemos acceso a la aplicación creo un router propio.
//y abajo, en vez de app.get uso router.get
const router = express.Router();
const service = new ProductsService();


router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});


router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Poduct 2',
    price: 2000,
    image:"",
  });
});


router.patch('/:id',
validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'),
async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    };
  }
);


{
  "name": "Camisa",
  "price": 1212
}



router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});



router.get('/:id',
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id); //el error esta en el findOne, y quien lo llama es este router
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);



router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.params;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  });



//lo hacemos un modulo exportable:
module.exports = router;


