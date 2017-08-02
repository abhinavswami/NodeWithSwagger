'use strict';
// Include our "db"
var db = require('../../config/db')();
// Export all options to perform on db
module.exports = {getAll, save, getOne, update, delMovie};

//GET /movie operationId
function getAll(req,res,next) {
  console.log(req.swagger);
  res.json({movies: db.find()});
}

// POST /movie operationId
function save(req,res,next) {
  res.json({success: db.save(req.body), description: "Movie added to the list!"});
}

//GET /movie/{id} operationId
function getOne(req,res,next){
  console.log(req.swagger);
  var id = req.swagger.params.id.value;  //req.swagger contains the path parameters
  var movie = db.find(id);
  if(movie){
    res.json(movie);
  }
  else {
    res.status(204).send();
  }
}

//PUT /movie/{id} operationId
function update(req,res,next) {
  var id = req.swagger.params.id.value;  //req.swagger contains the path parameters
  var movie = req.body;
  if(db.update(id, movie)){
    res.json({success : 1, description : "Movie updated!"});
  }
  else
    {
      res.status(204).send();
    }
  }

// DELETE /movie/{id} operationId
function delMovie(req,res,next){
  var id = req.swagger.params.id.value;  //req.swagger contains the path parameters
  if(db.remove(id)){
    console.log("Trying to send back the response");
    res.json({success: 1, description: "Movie deleted!"});
  }
  else {
    {
      res.status(204).send();
    }
  }
}
