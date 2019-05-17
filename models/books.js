module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define('Books', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    pageCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
    // //Link to the
    // authorId: {
    //   type: DataTypes.INTEGER,
    //   //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // }
  });
  Book.associate = function(models) {
    Book.belongsTo(models.Authors);
  };
  return Book;
};
