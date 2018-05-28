var db = require("../models");
const aws = require('aws-sdk');
var path = require("path");
const S3_BUCKET = process.env.S3_BUCKET;

module.exports = function(app) 
{

  app.get('/sign-s3', (req, res) => 
  {
    const s3 = new aws.S3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = 
    {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: 'public-read'
    };
    s3.getSignedUrl('putObject', s3Params, (err, data) => 
    {
      if(err){
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
      };
      res.write(JSON.stringify(returnData));
      res.end();
    });
  });

  app.post('/save-details', (req, res) => 
  { 
      var object = {};
      object =  req.body;
      object.UserId = "1";
      console.log(object);
      // TODO: Read POSTed form data and do something useful
      db.Condo.create(object).then(function(data) 
      {
        var theId = data;
        //console.log(theId);
        console.log(theId.dataValues.id);
        console.log(object.pictureurl);
        var newPicture= {};
        newPicture.CondoId = theId.dataValues.id;
        newPicture.name = object.pictureurl;
        console.log(newPicture);
        db.Picture.create(newPicture);
        res.sendFile(path.join(__dirname, "../public/register.html"));
      });
    });
};