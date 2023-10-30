// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'catagory_id',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_name',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
foreignKey: 'product_id',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: 'tag_name'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
