const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const fosterList = [];

// /admin/add-foster => GET
// serve/get the html
router.get('/add-foster', (req, res, next) => {
  // regular HTML
  // res.sendFile(path.join(rootDir, 'views', 'add-foster.html'));
  // for PUG
  res.render('add-foster', {
    pageTitle: 'Add Foster',
    path: '/admin/add-foster',
    activeAddFoster: true, 
    addFosterFormCSS: true,
  });
});

// /admin/add-foster => POST
// on submit/post add to the dummy arr
router.post('/add-foster', (req, res, next) => {
  console.log(req.body);

  fosterList.push({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    bio: req.body.bio,
    isCatsafe: req.body.iscatsafe,
  });
  res.redirect('/fosters');
});

exports.routes = router;
exports.fosterList = fosterList;
