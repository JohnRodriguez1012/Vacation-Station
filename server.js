// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
//const aws = require('aws-sdk');
//const S3_BUCKET = process.env.S3_BUCKET;
/*
 * Configure the AWS region of the target bucket.
 * Remember to change this to the relevant region.
 */
//aws.config.region = 'us-east-1';
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("./public"));

// Routes
// =============================================================
require("./routes/post-condo-routes.js")(app);
require("./routes/post-user-routes.js")(app);
require("./routes/post-search-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
