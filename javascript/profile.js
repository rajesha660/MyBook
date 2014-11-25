"use strict";

/* create a profile for the user */
function createProfile() {
	
	var username = document.getElementsByName("name")[0].value;
	var age = document.getElementsByName("age")[0].value;
	var phone = document.getElementsByName("phone")[0].value;
	var email = document.getElementsByName("email")[0].value;
	var address = document.getElementsByName("address")[0].value;
	var profileImage = document.getElementsByName("image")[0].value;
	
	if(validateProfile(username, age, phone, email)) {
		ProfileService.saveProfile("rajesha", new Profile(username, age, phone, email, address, profileImage));
		alert("Your profile saved successfully");
	}
}

/* validate the profile feeds */
function validateProfile(username, age, phone, email) {
	
	if (isNaN(age) || isNaN(phone)) {
		alert("Use only numbers for phone and age field");
		return false;
	} else if(age >= 100) {
		alert("Enter a valid age");
		return false;
	}else if(validateEmail(email)) {
		alert("Not a valid e-mail address");
		return false;
	}
	return true;
}

/* email validation */
function validateEmail(email) {
	
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    return (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length) ? true : false;
}

function enableSaveButton() {
	
	var username = document.getElementsByName("name")[0].value;
	var age = document.getElementsByName("age")[0].value;
	var phone = document.getElementsByName("phone")[0].value;
	var email = document.getElementsByName("email")[0].value;

	if(username.length == 0 || age.length == 0 || phone.length == 0 || email.length == 0) {
		document.getElementById("save_btn").disabled = true;
	} else {
		document.getElementById("save_btn").disabled = false;
	}
}

function showPreviewImage(obj) {
	
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
}