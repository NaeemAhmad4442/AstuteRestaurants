const mongodb = require ('mongodb');
const MongoClient = mongodb.MongoClient;
const MongoConnect = callback =>{
  MongoClient.connect('mongodb+srv://ahmad:cattog123@cluster0-urynw.mongodb.net/test?retryWrites=true')
 .then(result =>{
   console.console.log('connected!');
 })
 .catch(err => {
   console.log(err);
 });
};

module.exports= MongoConnect;
