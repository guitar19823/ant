const { Router } = require('express');
const Conserve = require('../models/conserve');
const router = Router();

// Get conserves list. Limit 10
router.get('/', async (req, res) => {
  try {
    const result =  await Conserve.findAndCountAll({
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

// Get conserves list
router.get('/limit=:limit&offset=:offset', async (req, res) => {
  try {
    const result =  await Conserve.findAndCountAll({
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

// Get conserves list
router.get('/:title', async (req, res) => {
  try {
    const result =  await Conserve.findAll({
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

