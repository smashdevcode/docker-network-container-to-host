
const express = require('express');
const axios = require('axios');

const app = express();

app.get('/ping', (req, res, next) => {
  const url = 'http://localhost:5000/ping';
  axios.post(url)
    .then((response) => {
      res.send(`Sent ping to ${url}... pong!`)
    })
    .catch((error) => {
      res.send(`Sent ping to ${url}... bummer!`);
    });
});

app.post('/ping', (req, res) => {
  console.log('Receiving ping... sent pong');
  res.send('Pong!');
});

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
