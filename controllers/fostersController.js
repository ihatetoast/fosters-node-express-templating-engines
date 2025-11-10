const Foster = require('../models/foster');

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
};

// on submit/post add to the dummy arr
exports.postAddFoster = (req, res, next) => {
  const foster = new Foster(
    req.body.name,
    req.body.imageUrl,
    req.body.bio,
    req.body.iscatsafe
  );
  foster.save();
  res.redirect('/fosters');
};

exports.getFosters = (req, res, send) => {
  // pass a callback in fetchAll so Foster modal knows what to do with the data fetched.
  const fosters = Foster.fetchAll((fosters) => {
    // for  templating engine:
    res.render('fosters', {
      pageTitle: 'Current Fosters',
      fosters: fosters,
      path: '/',
      hasFosters: fosters.length > 0, // for hbs
      activeFosters: true, // for hbs
      fostersCSS: true, // for hbs
    });
  });
};
