const express = require('express');
const bodyParser = require('body-parser');
const keys = require('./config/key');
const passport = require('passport');
const RouteApp = require('./routes');
const cookieSession = require('cookie-session');
require('./services');

const mongoose = require('mongoose');
mongoose.connect(
  keys.mongoURI,
  {
    useNewUrlParser: true,
  },
);

const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 1000 * 60 * 60 * 24 * 30,
    keys: [keys.cookieKey],
  }),
);

app.use(passport.initialize());
app.use(passport.session());

RouteApp(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Running on port ${PORT} ...`);
