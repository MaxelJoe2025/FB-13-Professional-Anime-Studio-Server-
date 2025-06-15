const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');

app.use(express.json());
app.use(express.static('frontend'));

const animeRoute = require('./routes/anime');
app.use('/api/generate-episode', animeRoute);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(3000, () => console.log('🚀 FB-13 Server running on port 3000'));