const passport = require('passport');

const checkAuth = (req, res, done) => {
  console.log('user', req.user);
  if (!req.user) {
    res.redirect('/');
  } else {
    done();
  }
};

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Khong co gi');
  });
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
      const json = await res.json(req.user);
      console.log('a');
      return json;
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
};
