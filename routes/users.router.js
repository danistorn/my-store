const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();


app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay promesas');
  }
});

Api.example.com/api/v1/users
