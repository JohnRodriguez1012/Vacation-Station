var db = require("../models");
var path = require("path");

module.exports = function(app) 
{
  app.post('/save-account', (req, res) => 
  { 
      var object = {};
      object =  req.body;
      console.log(object);
      // TODO: Read POSTed form data and do something useful
      db.User.create(object).then(res.sendFile(path.join(__dirname, "../public/frontpage.html")));
  });
};
