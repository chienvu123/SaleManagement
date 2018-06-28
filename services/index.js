const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/key');
const User = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
})

passport.use(
    new GoogleStrategy({
        clientID: keys.clientID,
        clientSecret: keys.clientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },  (accessToken, refreshToken, profile, done) => {
        User.findOne({googleId: profile.id})
        .then(existUser => {
            if(existUser) {
                done(null, existUser);
            } else {
                new User({
                    googleId: profile.id,
                    email: profile.email,
                    userName: profile.displayName
                }).save()
                .then((user) => {
                    done(null, newUser);
                })
            }
        })
    })
)