var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var passport = require('passport')
var request = require('request')
var async = require('async')
GoogleStrategy = require('passport-google').Strategy

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('http://pokeapi.co/api/v1/')









// Redirect the user to Google for authentication.  When complete, Google
// will redirect the user back to the application at
//     /auth/google/return
router.get('http://localhost:3000/auth/google', passport.authenticate('google'));

// Google will redirect the user to this URL after authentication.  Finish
// the process by verifying the assertion.  If valid, the user will be
// logged in.  Otherwise, authentication has failed.
router.get('http://localhost:3000/auth/google/return',
  passport.authenticate('google', { successRedirect: '/',
                                    failureRedirect: '/login' }));


module.exports = router;
