const express = require('express');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todos');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;




const app = express();
app.use(bodyParser.urlencoded({extended: false}));

const mustacheExpressInstance = mustacheExpress();
mustacheExpressInstance.cache = null

app.engine('mustache', mustacheExpressInstance);

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.use('/', todoRoutes);

// let todos = {todos: [{description: 'Make a todo site', done: false}] };

// app.get('/todos', function(req,res){
//   db.collection('todos').find({}).toArray(function(err, data){
//       res.render('index', {todos: data});
//   });
// });

let url = 'mongodb://localhost:27017/awesome_todos';

mongoose.connect(url, { useMongoClient: true }).then(function(){
  console.log('connected to the Database');
});



  app.listen(3003, function(){
    console.log('Listening on port 3003');
  });
