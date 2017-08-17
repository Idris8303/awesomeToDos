const mongoClient =require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID

let database = null;

function connect(url, callback){
  // If we have already connected, do't do it again. That is what below does.
  if(database !== null){
    return database;
  }

  mongoClient.connect(url, function(err, db){
    database = db;
    callback();
  });
}

function db(){
  return database;
}

module.exports = {
  connect: connect,
  db:db,
  ObjectID: ObjectID
};
