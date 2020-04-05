const { Router } = require('express');
const Shoes = require('../models/shoes');
const router = Router();

// Get shoes list. Limit 10
router.get('/', async (req, res) => {
  try {
    const result =  await Shoes.findAndCountAll({
      limit: 10
    });

    res.status(200).json(result);
  } catch (e) {
    console.log(e);

    res.status(500).json({
      message: 'Server error'
    });
  }
});

// Get shoes list
router.get('/limit=:limit&offset=:offset', async (req, res) => {
  try {
    const result =  await Shoes.findAndCountAll({
      limit: req.params.limit,
      offset: req.params.offset
    });

    res.status(200).json(result);
  } catch (e) {
    console.log(e);

    res.status(500).json({
      message: 'Server error'
    });
  }
});

// Get shoes list
router.get('/:title', async (req, res) => {
  try {
    const result =  await Shoes.findAll({
      where: {
        title: req.params.title
      }
    });

    res.status(200).json(result);
  } catch (e) {
    console.log(e);

    res.status(500).json({
      message: 'Server error'
    });
  }
});

module.exports = router;