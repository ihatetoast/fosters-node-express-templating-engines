const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const pageNotFoundController = require('./controllers/errorController')

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


const adminRoutes = require('./routes/admin');
const fostersRoutes = require('./routes/main');

app.use(bodyParser.urlencoded({ extended: false }));

const rootDirectory = require('./utils/path');

// static files:
app.use(express.static(path.join(rootDirectory, 'public')));

// routes
// /admin routes go to the admin.js. idea would be the GALT team, not regular foster carers
app.use('/admin', adminRoutes);
app.use(fostersRoutes);




app.use(pageNotFoundController.getErrorPage);

app.listen(3000);
