const passport = require('passport');

const checkAuth = (req, res, done) => {
    if(!req.user) {
        res.redirect('google');
    } else {
        done();
    }
}

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ["email", "profile"]
    }));

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        // res.send(req.user);
        res.redirect('/auth/profile');
    });
    // get = path + func + func done!
    app.get('/auth/profile', checkAuth, (req, res) => {
        res.send(req.user);
    });

    app.get('/auth/logout', (req, res) => {
        req.logout();
        res.redirect('login');
    })

    app.get('/auth/login', checkAuth, (req, res) => {
        res.send(req.user);
    })
}