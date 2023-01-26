const Category = (sequelize, DataTypes) => {
    const user = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
      name: DataTypes.STRING,      
    }, {
        tableName: 'categories'
    });

    return user;
  };

  module.exports = Category;