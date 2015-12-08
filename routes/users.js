var express = require('express');
var router = express.Router();
var User = require('../models/_User');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
   	User.find({}, function(err, users){
   		if(err)
   			res.send(err);
   		console.log(users);
   		res.send(users);
   	});
   
});

router.post('/signUp', function(req, res) {
	new User(req.body).save(function(err) {
	  if (err) res.sendStatus(500).json({
	  	err: "Internal server error"
	  });

	  console.log('User saved successfully!');
	});
   	res.sendStatus(200);
});
module.exports = router;
