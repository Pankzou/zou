//var $ = require('jquery');
//$('body').html("this is jquery ~~");
//input("./index.css");
// require('../common.js');
require("./index.css");
console.log("index");

var _user = require('service/user-service.js');
_user.login(
	'username':'zs',
	'password':'111111'
	)