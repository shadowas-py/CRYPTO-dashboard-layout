const axios = require('axios');
const express = require('express');
const cors = require('cors');
// config
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const PORT = 8002;
const { API_KEY } = process.env;

const app = express();
app.listen(PORT, () => console.log(`APP is running on ${PORT}`));

app.get('/', (req, res) => {
  const options = {
    method: 'GET',
    headers: { 'X-CMC_PRO_API_KEY': API_KEY },
  };
  const LIMIT = 5
  console.log(process.env);
  console.log(API_KEY);
  axios
    .get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?sort=cmc_rank&limit=${LIMIT}`, options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((e) => {
      console.error(e.message);
    });
});
