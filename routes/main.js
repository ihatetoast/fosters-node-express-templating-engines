// what anyone at any auth could see

const express = require('express');
const path = require('path');

const adminData = require('./admin');

const fostersController = require('../controllers/fostersController');

const router = express.Router();

router.get(['/', '/fosters'], fostersController.getFosters );

module.exports = router;
