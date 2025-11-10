const path = require('path');

const express = require('express');

// CONTROLLERS for fosters-related fcns
const fostersController = require('../controllers/fostersController');

const router = express.Router();

// /admin/add-foster => GET
// serve/get the html
// getAddFoster from fosters controller:
router.get('/add-foster', fostersController.getAddFoster);

// /admin/add-foster => POST
// on submit/post add to the dummy arr
// postAddFoster from fosters controller:
router.post('/add-foster', fostersController.postAddFoster);

module.exports = router;