var db = require('../models');

module.exports = function(app) {
  app.post('/authors', function(req, res) {
    db.Authors.create(req.body).then(function() {
      res.redirect('/');
    });
  });
  app.post('/books/:id', function(req, res) {
    db.Books.create({ ...req.body, AuthorId: req.params.id }).then(function() {
      res.redirect('/');
    });
  });
};
