const passport = require('passport');
const User = require('../models/User');

const checkAuth = (req, res, done) => {
  console.log('user', req.user);
  if (!req.user) {
    res.redirect('/');
  } else {
    done();
  }
};

module.exports = (app) => {
  // app.get('/', (req, res) => {
  //   res.send('Khong co gi');
  // });
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['email', 'profile'],
    }),
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    async (req, res) => {
      // res.send(req.user);
      res.statusCode = 200;
      res.setHeader('content-type', 'application/json');
      // const json = await res.json(req.user);

      res.redirect('/survey');
    },
  );
  // get = path + func + func done!
  app.get('/api/profile', (req, res) => {
    res.send(req.user);
  });

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('login');
  });

  app.get('/auth/login', checkAuth, (req, res) => {
    res.send(req.user);
  });

  app.get('/test', (req, res) => {
    User.Test('fdsfds', (msg) => {
      res.send(msg);
    });
  });
};
