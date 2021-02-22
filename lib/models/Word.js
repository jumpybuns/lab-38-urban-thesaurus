const pool = require('../utils/pool');

module.exports = class Word {
  id;
  word;
  definition;
  example;

  constructor(row) {
    this.id = row.id;
    this.word = row.word;
    this.definition = row.definition;
    this.example = row.example;
  }

  static async find() {
    const { rows } = await pool.query('SELECT * FROM words');

    return rows.map((row) => new Word(row));
  }
};
