const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const category_name = await Category.findAll({
      include: [Product],

    });
    console.log("category")
    res.status(200).json(category_name);
  } catch (error) {
    res.status(500).json(error);
  }
});
// async and try catch
// const cat = await Cat.find();
// res.json
//catch err


router.get('/:id', async (req, res) => {
  try {
    const category_name = await Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [Product]
    });
    console.log("category")
    res.status(200).json(category_name);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.post('/', async (req, res) => {
  // create a new category
  try {
    const category_name = await Category.create(req.body)
  
console.log("category")
  res.status(200).json(category_name);
} catch (error) {
  res.status(500).json(error);
}
});

router.put('/:id', async (req, res) => {
  try {
    const category_name = await Category.updateOne({
      where: {
        id: req.params.id,
      },
    });
    console.log("category")
    res.status(200).json(category_name);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const category_name = await Category.destroy({
      where: {
        id: req.params.id
      }});
      console.log("category")
      res.status(200).json(category_name);
    } catch (error) {
      res.status(500).json(error);
    }
  });
 

module.exports = router;
