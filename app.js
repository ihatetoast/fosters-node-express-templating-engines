const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// FOR HANDLEBARS TEMPLATING ENGINE
// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({
//   extname: '.hbs',
//   defaultLayout: 'main', 
// });

// app.engine('hbs', hbs.engine);
// app.set('view engine', 'hbs');

// FOR PUG TEMPLATING ENGINE
// pug is set up to work seamlessly
// app.set('view engine', 'pug');
// tell pug where the views are:
// default works since using views

// FOR EJS TEMPLATING ENGINE
// most out-of-the-box so...
app.set('view engine', 'ejs');

app.set('views', 'views');


const adminData = require('./routes/admin');
const fostersRoutes = require('./routes/fosters');

app.use(bodyParser.urlencoded({ extended: false }));

const rootDirectory = require('./utils/path');

// static files:
app.use(express.static(path.join(rootDirectory, 'public')));

// routes
// /admin routes go to the admin.js. idea would be the GALT team, not regular foster carers
app.use('/admin', adminData.routes);
app.use(fostersRoutes);




app.use((req, res, next) => {
  // regular HTML
  // res.status(404).sendFile(path.join(rootDirectory, 'views', '404.html'));
  // for PUG:
  res.status(404).render('404', {pageTitle: '404: Page not found'})
});

app.listen(3000);
