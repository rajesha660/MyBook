"use strict";
var app = angular.module('services', []);

app.factory('FeedService', function() {

	var FeedService = undefined;
	var Feed = undefined;
	var URLFeed = undefined;
	var TextFeed = undefined;
	var feedStore = [];
	
	Feed = function(id, type, date) {
		this._id = id;
		this._type = type;
		this._date = date;
	};
	
	Feed.prototype = {
	
		getId: function() {
			return this._id;
		},
		getType: function() {
			return this._type;
		},
		getDate: function() {
			return this._date;
		}
	};
	
	URLFeed = function(url) {
		this.url = url;
		this.getFeed = function() {
			return this.url;
		}
	};

	TextFeed = function(url) {
		this.url = url;
		this.getFeed = function() {
			return this.url;
		}
	};
	
	TextFeed.prototype = Object.create(Feed.prototype);
	URLFeed.prototype = Object.create(Feed.prototype);
	
	var createFeed = function(value) {
		
		var feed;
		var n = value.search(/https|ftp|http/i);
		if(n < 0) {
			feed = new TextFeed(value);
		} else {
			feed = new URLFeed(value);
		}
		
		feed._id = "MyPost"+feedStore.length;
		feed._date = Date.now();
		if(feed instanceof URLFeed) {
			feed._type = "url";
		} else {
			feed._type = "text";
		}
		feedStore.unshift(feed);
	};
	
	var deleteFeed = function(feedId) {
		
		for(var i = 0, size = feedStore.length; i < size; i++) {
			if(feedId === feedStore[i].getId()) {
				feedStore.splice(i, 1);
				break;
			}
		}
	};
	
	return {
		createFeed : createFeed,
		deleteFeed : deleteFeed,
		feedStore : feedStore
	};
});

app.factory('ProfileService', function() {

	var ProfileService = undefined;
	var Profile = undefined;
	var profileStore = {};
	
	Profile = function(name, age, phone, email, address, profileImage) {
		this.name = name;
		this.age = age;
		this.phone = phone;
		this.email = email;
		this.address = address;
		this.profileImage = profileImage;
	};
	
	var saveProfile = function(userid, username, age, phone, email, address, profileImage) {
	
		var profile = new Profile(username, age, phone, email, address, profileImage);
		profileStore.profile = profile;
		profileStore.userid = userid;
	};
	
	return {
		saveProfile : saveProfile
	};
});
