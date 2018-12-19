// Imported to make path - This gives directory name in default
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user');
// Express Node Js Packet, to ease the Nodejs functionalities
const express = require('express');
const compression = require('compression');
// Body Parser to read data from body in parsed way
const bodyParser = require('body-parser');
// Requiring controller for fetching errors
const errorController = require('./controllers/error');
// Using express function to initialize
const app = express();
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${
  process.env.MONGO_PASSWORD
}@cluster0-ntrwp.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`;
//Setting express engine to ejs, this will look into the views folder and search for ejs files and will convert them into html
app.set('view engine', 'ejs');
app.set('views', 'views');
// Importing admin and shop routes from routes folder
const indexRoute = require('./routes/index');
app.use(compression());
// Using body parser for every request
app.use(bodyParser.urlencoded({ extended: false }));
// Allowing public folder containing assets to be accessed globally
app.use(express.static(path.join(__dirname, 'public')));
// Directing every request starting with /admin towards admin routes folder
// app.use('/admin', adminRoutes);
// // Directing every request towards shop routes folder
 app.use(indexRoute);
// // Directing towards error controller
app.use(errorController.get404);
// Starting App
// mongoose.connect('mongodb+srv://naeem:cattog123@cluster0-0xnj0.mongodb.net/astuterestaurants?retryWrites=true')
// .then(result => {
//   app.listen(3000);
// })
// .catch(err => {
//   console.log(err);
//});
// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 8000;
// }
// app.listen(port);
// mongoose.connect('mongodb+srv://naeem:cattog123@cluster0-0xnj0.mongodb.net/webapp?retryWrites=true')
// .then(result => {
//   User.findOne().then(user => {
//     if(!user){
//       const user = new User({
//         firstName: 'Ahmad',
//         lastName: 'Naeem',
//         email: 'naeem.4442@gmail.com',
//         password: 'cattog123',
//         pin: '4444',
//         phoneNumer: '3339969892'
//       });
//       user.save();
//     }
//   });
//   app.listen(3000);
// })
// .catch(err => {
//   console.log(err);
// });
mongoose
  .connect(MONGODB_URI)
  .then(result => {
    // https
    //   .createServer({ key: privateKey, cert: certificate }, app)
    //   .listen(process.env.PORT || 3000);
      app.listen(process.env.PORT || 3000);
  })
  .catch(err => {
    console.log(err);
  });
