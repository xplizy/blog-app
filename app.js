const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog-db', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Välkommen till min blogg!');
});

app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  const post = new mongoose.model('Post', { title, content });
  post.save((err) => {
    if (err) {
      res.status(500).send({ message: 'Fel vid skapandet av inlägg' });
    } else {
      res.send({ message: 'Inlägg skapat successfult!' });
    }
  });
});

app.listen(3000, () => {
  console.log('Servern har startats på port 3000');
});