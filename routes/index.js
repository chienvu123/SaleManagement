const passport = require('passport');
const User = require('../models/User');
const Post = require('../models/Post');
const Articles = require('../models/Articles');
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
  app.get('/insert/:username/:password', (req, res) => {
    // User.
  });
  app.get('/post/find', (req, res) => {
    // Post.
    Post.Test((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
  });
  app.get('/articles/find', (req, res) => {
    // Post.
    Articles.Test((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
  });
  app.get('/book/find', (req, res) => {
    // Post.
    User.Test((err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    });
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
