const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// find all tags
// be sure to include its associated Product data
router.get('/', async (req, res) => {
  try {
    const tag_name = await Tag.findAll({

      include: [ProductTag, Product]
    });
    console.log("tag")
    res.status(200).json(tag_name);
  } catch (error) {
    res.status(500).json(error);
  }
});




router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag_name = await Tag.findOne({
      where: {
        id: req.params.id,
      },
      include: [ProductTag, Product]
    });
    console.log("tag")
    res.status(200).json(tag_name);
  } catch (error) {
    res.status(500).json(error);
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const tag_name = await Tag.create({
      tag_name: req.body.tag_name,});

    console.log("new tag")
    res.status(200).json(tag_name);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update a tag's name by its `id` value

router.put('/:id', async(req, res) => {
  try {
    const tag_name = await Tag.updateOne({
      where: {
        id: req.params.id,
      },
    });
    console.log("updated tag")
    res.status(200).json(tag_name);
  } catch (error) {
    res.status(500).json(error);
  }
});
  
// delete on tag by its `id` value

router.delete('/:id', async (req, res) => {
  try {
    const tag_name = await Tag.destroy({
      where: {
        id: req.params.id
      }});
      console.log("tag deleted")
      res.status(200).json(tag_name);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  


module.exports = router;
