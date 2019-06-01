var express = require('express');
var router = express.Router();
var User = require('../../models/userModel')
var _ = require('lodash')

//Get Users
router.get('/', function (req, res, next) {
  User.find().sort({created_date: -1}).exec((err, data) => {
    if(err){
        return res.status(500).send({err : {message : err.message , code : err.code}})
    }
    res.status(200).send(data)
  })
});

//Get User By Id
router.get('/:_id', function (req, res, next) {
    User.findById(req.params._id).exec((err, data) => {
      if(err){
          return res.status(500).send({err : {message : err.message , code : err.code}})
      }
      res.status(200).send(data)
    })
  });

module.exports = router;
