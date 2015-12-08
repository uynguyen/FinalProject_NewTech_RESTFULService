var express = require('express');
var router = express.Router();
var User = require('../models/_User');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
	// create a new user called chris
	// var chris = new User({
	//   name: 'Chris',
	//   username: 'sevilayha123',
	//   password: 'password' 
	// });

	// // call the custom method. this will just add -dude to his name
	// // user will now be Chris-dude
	// chris.dudify(function(err, name) {
	//   if (err) throw err;

	//   console.log('Your new name is ' + name);
	// });

	// // call the built-in save method to save to the database
	// chris.save(function(err) {
	//   if (err) throw err;

	//   console.log('User saved successfully!');
	// });
 //    res.render('index', { title: 'Express' });
   	User.find({}, function(err, users){
   		if(err)
   			throw err;
   		console.log(users);
   		res.send(users);
   	});
   
});
module.exports = router;
