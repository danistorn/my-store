const express = require('express');
//importo el router de los productos
const productsRouter = require('./products.router');
// const categoriesRouter = require('./categories.router');
const usersRouter = require ('./users.router');
const categoriesRouter = require ('./categories.router');



//index.js dice en que endoint deberia estar cada modulo:
function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    app.use('/products', productsRouter);
    app.use('/categories', categoriesRouter);
    app.use('/users', usersRouter);
}


//aca exportamos la función routerApi, para luego importarla en index.js (el index principal, el que esta fuera de routes)
module.exports = routerApi;
