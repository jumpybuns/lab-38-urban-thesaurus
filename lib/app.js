const express = require('express');
const app = express();
const Word = require('./models/Word');

app.use(express.json());

app.get('/api/words', (req, res, next) => {
  Word.find()
    .then((words) => res.send(words))
    .catch(next);
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
