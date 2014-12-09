"use strict";
var app = angular.module('index', []);

/* Validate the login credentials */
app.controller('LoginController', function() {

	var _username = "rajesha";
	var _password = "test123";
	
	this.validateLogin = function(data) {
		
		this.username = data.username;
		this.password = data.password;
		
		if(this.username.length == 0 || this.password.length == 0) {
			alert("User name or password should not be empty");
			return false;
		} else if((this.username != _username) || (this.password != _password)) {
			alert("Invalid username or password");
			return false;
		} else {
			document.location.href='html/feeds.html';
		}
	};
});