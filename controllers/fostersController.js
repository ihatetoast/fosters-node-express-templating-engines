
const fosterList = [];


exports.getAddFoster = (req, res, next) => {
  // regular HTML
  // res.sendFile(path.join(rootDir, 'views', 'add-foster.html'));
  // for PUG
  res.render('add-foster', {
    pageTitle: 'Add Foster',
    path: '/admin/add-foster',
    activeAddFoster: true, // for hbs
    addFosterFormCSS: true, // for hbs
  });
}

// on submit/post add to the dummy arr
exports.postAddFoster = (req, res, next) => {
  console.log(req.body);

  fosterList.push({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    bio: req.body.bio,
    isCatsafe: req.body.iscatsafe,
  });
  res.redirect('/fosters');
}

exports.getFosters = (req, res, send) => {
  // for  templating engine:
  res.render('fosters', {
    pageTitle: 'Current Fosters',
    fosters: fosterList,
    path: '/',
    hasFosters: fosterList.length > 0, // for hbs
    activeFosters: true, // for hbs
    fostersCSS: true  // for hbs
  });
}