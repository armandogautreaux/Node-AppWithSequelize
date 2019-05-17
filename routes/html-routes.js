var db = require('../models');

module.exports = function(app) {
  app.get('/', function(req, res) {
    db.Authors.findAll({
      include: [db.Books]
    }).then(function(authors) {
      res.render('index', { authors });
    });
  });
};
