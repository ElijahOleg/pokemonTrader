var routes = function (passport) {

  var mongoose = require('mongoose')
  var passport = require('passport')
  var request = require('request')
  var async = require('async')

  var express = require('express');
  var Twitter = require("twitter");
  var router = express.Router();

  function twitterClient(params) {
    return new Twitter({
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: params.access_token_key,
      access_token_secret: params.access_token_secret
    });
  };

  router.get('/auth/twitter', passport.authenticate('twitter'), 
             function(req, res){});

//  router.get('/auth/twitter/callback', passport.authenticate('twitter', {
//    failureRedirect: '/'
//  }), function (req, res) {
//    console.log("getting callback");
//    // Successful authentication, redirect home.
//    res.redirect('/');
//  });


  router.get("/", function (req, res) {
    res.render("index");
  });
  
  mongoose.connect(process.env.MONGO_URL);
  
//  export MONGO_URL=mongodb://localhost/pokemontrader
  
  
  var traderSchema = mongoose.Schema({
    trainer_name: { type: String },
    user_name: { type: String }, 
    friend_code: { type: String },
    owned_pokemon: [{name: {type: String}}],
    email: { type: String },
    password: { type: String }
  });
  
  var Traders = mongoose.model("Traders", traderSchema);
  
  router.post("/trader", function(req, res) {
    console.log("getting something");
    var trader = new Traders(req.body.trainer_name);
    console.log(req.body.trainer_name);

    trader.trainer_name = req.body.trainer_name;

    trader.save(function(err, trainerName) {
      if (err) {
        console.log(err);
        res.status(400).json({ error: "Validation Failed" });
      }
      console.log("new trainer:", trainerName);
      res.json(trainerName);
    });
  });
  

  return router;
}

module.exports = routes;