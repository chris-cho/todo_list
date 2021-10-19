"use strict";

// Basic express setup:
const express       = require("express");
const bodyParser    = require("body-parser");
const cookieSession = require("cookie-session");
const app           = express();

// app.use(cookieSession({
//   name: 'session',
//   keys: [/* secret keys */],

//   // Cookie Options
//   maxAge: 24 * 60 * 60 * 1000 // 24 hours
// }));

app.get('/test', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, (err) => console.log(err || `listening on port ${port} 😎`));