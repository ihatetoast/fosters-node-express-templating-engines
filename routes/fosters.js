// what anyone at any auth could see

const express = require('express');
const path = require('path');

const rootDirectory = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get(['/', '/fosters'], (req, res, send) => {
  // console.log(adminData.fosterList);
  const fostersList = adminData.fosterList;
  console.log(fostersList);
  // regular HTML
  // res.sendFile(path.join(rootDirectory, 'views', 'fosters.html'));
  // for PUG templating engine:
  res.render('fosters', {
    pageTitle: 'Current Fosters',
    fosters: fostersList,
    path: '/',
    hasFosters: fostersList.length > 0,
    activeFosters: true,
    fostersCSS: true 
  });
});

module.exports = router;
