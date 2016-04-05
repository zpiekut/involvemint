var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

//Get a user
router.get('/:userId', function(req, res, next) {
  var userId = req.params.userId;

  // connection.connect();
  // connection.query('SELECT * FROM Users WHERE username=' + userId, function(err, rows, fields) {
  //   if (err) throw err;
  //   res.json(rows);
  // });
  // connection.end();

  res.json({
  	userId: userId,
  	type: 'volunteer'
  });
});

//Create a new user
router.post('/', function(req, res, next) {
  var userId = req.body.userId;
  var password = req.body.password;
  var type = req.body.type;

	// connection.connect();
	// connection.query('INSERT INTO Users (id,password,type)
	// 									VALUES (' + userId + ',' + password + ',' + type + ')', 
	// 	function(err, rows, fields) {
	//     if (err) throw err;
	//     res.json(rows);
	// 	}
	// );
	// connection.end();

  res.json({
  	message: 'respond with newly created user', 
  	userId: userId,
  	type: type		
	});
});

module.exports = router;
