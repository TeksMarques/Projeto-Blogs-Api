const PostCategory = (sequelize, DataTypes) => {
    const postCategory = sequelize.define('PostCategory', {
      post_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    }, {
      tableName: 'blog_posts'
  });

  postCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,
      {through: postCategory, foreignKey: 'post_id', otherKey: 'category_id', as: 'BlogPost'});
      models.BlogPost.belongsToMany(models.Category,
        {through: postCategory, foreignKey: 'category_id', otherKey: 'post_id', as: 'Category'});
  }

    return postCategory;
  };

  module.exports = PostCategory;