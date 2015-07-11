'use strict';

var mongoose = require('mongoose');

var pokemonSchema = mongoose.Schema({
  name: String,
  // resource_uri: String
});

var Pokemon = mongoose.model('Pokemon', pokemonSchema);

exports.pokemonSchema;. = pokemonSchema;
exports.pokemon = Pokemon;
