"use strict";

/* Validate the login credentials */
function validateLogin() {

	var _username = "rajesha";
	var _password = "test123";
	var username = document.forms["login_form"]["username"].value;
	var password = document.forms["login_form"]["password"].value;
	//username = _username;
	//password = _password;
	
	if(username.length == 0 || password.length == 0) {
		alert("User name or password should not be empty");
		return false;
	} else if((username != _username) || (password != _password)) {
		alert("Invalid username or password");
		return false;
	}
}