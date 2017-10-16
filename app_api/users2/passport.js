var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var config = require('./../../config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var Q = require('q');
var bcrypt = require('bcryptjs');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('users');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, function (email, password, done) {
    db.users.findOne({ email: email }, function (err, user) {
        if (err) {
            return done(err);
        }

        if (user && bcrypt.compareSync(password, user.hash)) {
            return done(null, user);
        } else {
            return done(null, null);
        }
    });
}));

module.exports = passport;