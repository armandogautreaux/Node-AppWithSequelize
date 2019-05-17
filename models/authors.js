module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define('Authors', {
    name: DataTypes.STRING
    // bookName: {
    //   type: DataTypes.STRING,
    //   references: 'Books',
    //   referencesKey: 'author'
    // }
  });

  Author.associate = function(models) {
    //author has many books
    Author.hasMany(models.Books);
  };
  return Author;
};
