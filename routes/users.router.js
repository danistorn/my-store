const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker');

const router = express.Router();


// Abrimos otro endpoint para users:
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
});


module.exports = router;
