const express = require('express');
const router = express.Router();
const DefaultController = require('../controllers/DefaultController');

router.get('/', DefaultController.index);

module.exports = router;
