const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const routes = require('/app.json');

const db = mysql.createConnection({
  host: 'toni@nastop-bg.com',
  user: 'nastnuc9_toni',
  password: '8=-AF8;~j@Mi',
  database: 'nastnuc9_toni',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});