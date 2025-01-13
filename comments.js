// Create web server
// Create a new express web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const commentsPath = path.join(__dirname, 'data/comments.json');

// Use the body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Listen on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});