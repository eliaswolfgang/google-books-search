const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(new LocalStrategy(
    { usernameField: 'email' },
    (email, password, done) => {
        User.findOne({email: email})
        .then((user) => {
            if (!user) { 
                return done(null, false, { message: 'Incorrect email' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user)
        })
    }
));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = passport;