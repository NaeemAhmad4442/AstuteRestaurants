const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var addressSchema = new Schema({
  street: {
    type: String,
    required: [true, 'Please enter street address'],
    min: [2, 'Too short to be a street name'],
    max: 20
  },
  houseNumer: {
    type: String,
    required: [true, 'Please enter house number'],
  },
  city: {
    type: String,
    required: [true, 'Please enter your city name'],
    min: [2, 'Too short to be a city name']
  },
  province: {
    type: String,
    required: [true, 'Please enter your province name'],
  },
});
module.exports = mongoose.model('address', addressSchema);
