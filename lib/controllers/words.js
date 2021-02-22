const { Router } = require('express');
const Word = require('../models/Word');

module.exports = Router().get('/', (req, res, next) => {
  Word.find()
    .then((words) => res.send(words))
    .catch(next);
});
