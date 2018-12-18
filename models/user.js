const mongoose = require('mongoose');
const emailType = require('mongoose-type-email');
const Schema = mongoose.Schema;
//const address = require('./address');



// var Person = db.model('Person', personSchema);
//
// var person = new Person();
// var error = person.validateSync();
// assert.ok(error.errors['name']);

var userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First Name field is required'],
    min: [3, 'Too short to be a name'],
    max: 20
  },
  lastName: {
    type: String,
    required: [true, 'Last Name field is required'],
    min: [3, 'Too short to be a name'],
    max: 20
  },
  email: {
    type: String,
    required: [true, 'An email is required for future notifications']
  },
  password: {
    type: String,
    required: true,
    min: [8, 'Please enter a password 8 characters long']
  },
  pin: {
    type: String,
    required: true,
    // min: [4, 'Please enter a pin atlease 4 digiys long'],
    // max: [8, 'The Pin cannot be longer then 8 digits']
  },
  phoneNumer: {
   type: String,
   // validate: {
   //   validator: function(v) {
   //     return /\d{3}-\d{3}-\d{4}/.test(v);
   //   },
   //   message: props => `${props.value} is not a valid phone number!`
   // },
   required: [true, 'User phone number required']
 }
 // address:[{
 //   street: {
 //     type: String,
 //     required: [true, 'Please enter street address'],
 //     min: [2, 'Too short to be a street name'],
 //     max: 20
 //   },
 //   houseNumer: {
 //     type: String,
 //     required: [true, 'Please enter house number'],
 //   },
 //   city: {
 //     type: String,
 //     required: [true, 'Please enter your city name'],
 //     min: [2, 'Too short to be a city name']
 //   },
 //   province: {
 //     type: String,
 //     required: [true, 'Please enter your province name']
 //   }
 // }],
});
module.exports = mongoose.model('User', userSchema);
