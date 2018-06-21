const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/key');
const app = express();
app.use(bodyParser.json());

mongoose.connect(keys.mongoURI);
const db = mongoose.connection;

app.get('/', (req, res) => {
    res.send(
        {
            said: 'api/req or Hello world!',
            port: PORT
        }
    );
});


const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Running on port ${PORT} ...`);