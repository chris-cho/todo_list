"use strict";

// Basic express setup:

const PORT          = 3000;
const express       = require("express");
const bodyParser    = require("body-parser");
const cookieSession = require("cookie-session");
const app           = express();
