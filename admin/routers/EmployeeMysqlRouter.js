const express = require('express');
const router = express.Router();
const EmployeeMysqlController = require('../controllers/api/EmployeeMysqlController');

router.get('/', EmployeeMysqlController.get);

module.exports = router;
