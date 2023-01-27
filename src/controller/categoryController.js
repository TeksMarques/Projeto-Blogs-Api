const categoryServices = require('../services/categoryServices');

const newCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const category = await categoryServices.newCategory(name);
  res.status(201).json(category);
};

module.exports = {
    newCategory,
};