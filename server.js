const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const users = require('./routes/api/users');

const app = express();

app.use(express.json());
app.use('/', express.static(path.join(__dirname, './client/public')));

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/users', users);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});