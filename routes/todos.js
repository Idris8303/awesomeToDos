const router = require('express').Router();
const Todo = require('../models/todos');

router.get('/todos', function(req, res){
  // const db = mongo.db();
  // db.collection('todos').find({}).toArray(function(err, data){
  //   res.render('index', { todos: data});
  // });
  Todo.find({}).then(function(results){
    res.render('index', { todos: results })
  });
});

router.post('/todos', function(req, res){
  // todosModel.insert(req.body, function(err, result){
  //   res.redirect('/todos');
  // });
  let newTodo = new Todo(req.body);
  newTodo.save().then(function(result){
    console.log(result);
    res.redirect('/todos');
  })
  .catch(function(err){
    console.log(err);
    res.redirect('/todos');

  });
});

//
  router.post('/todos/delete/:id', function(req, res){
//   todosModel.remove(req.params.id, function(err, result){
//     res.redirect('/todos');
//   });

  Todo.deleteOne({ _id: req.params.id}).then(function(){
    res.redirect('/todos');
  });
});

module.exports = router;
