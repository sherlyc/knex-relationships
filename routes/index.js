var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function(req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function(users) {
      res.render('index', {
        users: users
      })
    })
    .catch(function(err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profiles', function(req, res) {
  db.getProfiles(req.app.get('connection'))
    .then(function(profiles) {
      res.render('profiles', {
        profiles: profiles
      })
    })
})

router.get('/profiles/:id', function(req, res) {
  var connection = req.app.get('connection')
  var id = req.params.id
  db.getProfile(id, connection)
   .then(function(profile){
     res.render('profile', {
       profile: profile
     } )
   })
})

module.exports = router
