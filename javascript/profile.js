"use strict";
var app = angular.module('profile', ['services']);

app.controller('ProfileController',['ProfileService', function(ProfileService) {

	this.profile  = {};
	
	this.file = {};
	this.disable_savebtn = {};

	/* create a profile for the user */
	this.createProfile = function() {
		
		var username = this.profile.name;
		var age = this.profile.age;
		var phone = this.profile.phone;
		var email = this.profile.email;
		var address = this.profile.address;
		
		if(this.validateProfile(username, age, phone, email)) {
			ProfileService.saveProfile("rajesha", username, age, phone, email, address);
			alert("Your profile saved successfully");
		}
	};

	/* validate the profile feeds */
	this.validateProfile = function(username, age, phone, email) {
		
		if (isNaN(age) || isNaN(phone)) {
			alert("Use only numbers for phone and age field");
			return false;
		} else if(age >= 100) {
			alert("Enter a valid age");
			return false;
		}else if(this.validateEmail(email)) {
			alert("Not a valid e-mail address");
			return false;
		}
		return true;
	};

	/* email validation */
	this.validateEmail = function(email) {
		
		var atpos = email.indexOf("@");
		var dotpos = email.lastIndexOf(".");
		return (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length) ? true : false;
	};

	this.enableSaveButton = function() {
		
		var username = this.profile.name;
		var age = this.profile.age;
		var phone = this.profile.phone;
		var email = this.profile.email;

		if((username == undefined || age == undefined || phone == undefined || email == undefined)||
		(username.length == 0 || age.length == 0 || phone.length == 0 || email.length == 0)) {
			this.disable_savebtn = true;
		} else {
			this.disable_savebtn = false;
		}
	};

	this.showPreviewImage = function(obj) {
		
		var reader  = new FileReader();
		var file    = obj.files[0];
		
		reader.onloadend = function () {
			document.getElementById("profile_image").src = reader.result;
		}
		
		if (file) {
			reader.readAsDataURL(file);
		} else {
			preview.src = "";
		}
	};
}]);

