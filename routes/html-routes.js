// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/frontpage.html"));
  });

  // cms route loads cms.html
  app.get("/account/create", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // blog route loads blog.html
  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/frontpage.html"));
  });

  app.get("/post", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });

};
