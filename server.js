'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Ciao Luca, primo test NodeJs da portare dentro Docker\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

