const { Router } = require('express');
const Clothes = require('../models/clothes');
const router = Router();

// Get clothes list. Limit 10
router.get('/', async (req, res) => {
  try {
    const result =  await Clothes.findAndCountAll({
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

// Get clothes list
router.get('/limit=:limit&offset=:offset', async (req, res) => {
  try {
    const result =  await Clothes.findAndCountAll({
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

// Get clothes list
router.get('/:title', async (req, res) => {
  try {
    const result =  await Clothes.findAll({
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