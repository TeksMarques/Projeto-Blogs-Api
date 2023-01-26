module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'users',
  });
  users.associate = (models) => {
    users.hasMany(models.BlogPost,
      {foreignKey: 'user_id', as: 'blog_posts'})
  }
  
  return users;
}