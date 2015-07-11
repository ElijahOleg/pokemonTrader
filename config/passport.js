var passport = require('passport')
  , GoogleStrategy = require('passport-google').Strategy
  , var configAuth = require('./auth');

passport.use(new GoogleStrategy({
    returnURL: googleAuth.returnURL,
    realm: googleAuth.realm
  },
  function(identifier, profile, done) {
    User.findOrCreate({ openId: identifier }, function(err, user) {
      done(err, user);
    });
  }
));
