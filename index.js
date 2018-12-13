const express = require('express');
const mongoose = require('mongoose');

// Load routes
const components = require('./routes/components');
const frameworks = require('./routes/frameworks');

const app = express();

// Connect to database --> because running old 32 bit version
mongoose.Promise = global.Promise;
const db = require('./config/database');
mongoose.connect(db.mongoURI,  {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('hello');
});

// Use routes
app.use('/components', components);
app.use('/frameworks', frameworks);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});