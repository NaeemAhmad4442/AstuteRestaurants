// Imported to make path - This gives directory name in default
const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const User = require('./models/user');
const mongoConnect = require('./util/database');
const errorController = require('./controllers/error');
const app = express();


//Setting express engine to ejs, this will look into the views folder and search for ejs files and will convert them into html
app.set('view engine', 'ejs');
app.set('views', 'views');


// Importing admin and shop routes from routes folder
const indexRoute = require('./routes/index');

app.use(helmet());
app.use(compression());


// Using body parser for every request
app.use(bodyParser.urlencoded({ extended: false }));


// Allowing public folder containing assets to be accessed globally
app.use(express.static(path.join(__dirname, 'public')));


// // Directing every request towards shop routes folder
 app.use(indexRoute);
// // Directing towards error controller
app.use(errorController.get404);



// Starting App
  app.listen(3000);
