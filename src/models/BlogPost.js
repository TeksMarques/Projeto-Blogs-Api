const BlogPost = (sequelize, DataTypes) => {
    const blog = sequelize.define('BlogPost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,  
    }, {
        tableName: 'blog_posts'
    });
    blog.associate = (models) => {
        blog.belongsTo(models.User,
          {foreignKey: 'user_id', as: 'User'})
      }

    return blog;
  };

  module.exports = BlogPost;