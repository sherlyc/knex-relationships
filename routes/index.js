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

router.get('/profile/:id', function(req, res) {
  var connection = req.app.get('connection')
  var id = req.params.id
  db.getProfile(id, connection)
   .first()
   .then(function(profile){
     console.log(profile)
     res.render('profile', profile)
   })
})


router.get('/addUser', function(req, res) {//display add User form
  res.render('addUser')
})

router.post('/addUser', (req, res)=>{//perform add user to db
  db.addUser(req.body, req.app.get('connection'))
    .then((result)=>{
      res.redirect('/')
    })

})

router.get('/addPost', (req, res)=>{//display add blog post form
  res.render('addPost')
})

router.post('/addPost', (req, res)=>{
  db.addPost(req.body, req.app.get('connection'))
    .then((result)=>{
      res.send('blog post inserted')
    })
})

router.get('/blogs', (req, res)=>{
  db.getPosts(req.app.get('connection'))
    .then((result)=>{
      res.render('blogs', {posts:result})
    })
})

router.get('/blogs/:id', (req, res)=>{
  db.getPosts(req.app.get('connection'))
    .then((result)=>{
      console.log(result)
      res.render('blog', result)
    })
})


module.exports = router
