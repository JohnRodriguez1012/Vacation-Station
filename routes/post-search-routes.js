var db = require("../models");
var path = require("path");

module.exports = function(app) 
{
  app.post('/api/search', (req, res) => 
	{	 
    //console.log(req);
		var object = {};
    object =  req.body;
    //console.log(object)
    db.Condo.findAll(
    {
			where: 
			{
    		location: object.location,
    		price: {$lte: parseInt(object.price)},
    		pets:1,
    		guests:{$gte: parseInt(object.guests)}
    	}

	   }).then(function(data) 
	 {
        //console.log(data);
    res.json(data);
	 });
	});

  app.post('/api/searchpic', (req, res) => 
    {  
      //console.log(req);
      var object = {};
      object =  req.body;
      //console.log(object)
      db.Picture.findAll(
      {
        where: 
        {
          CondoId: parseInt(object.id)
        }

    }).then(function(data) 
    {
      console.log(data);
      res.json(data);
    });
  });
};
