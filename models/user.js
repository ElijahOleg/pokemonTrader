'use strict';

var mongoose = require('mongoose');
var poke = require('models/pokemon.js')
var userSchema = mongoose.Schema({
  user_name: String,
  email: String,
  myPokemon:[poke.pokemonSchema]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
