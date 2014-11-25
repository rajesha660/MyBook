"use strict";

var FeedService = undefined;
var Feed = undefined;
var URLFeed = undefined;
var ProfileService = undefined;
var Profile = undefined;

Feed = function(id, type, date) {
	this._id = id;
	this._type = type;
	this._date = date;
};

Profile = function(name, age, phone, email, address, profileImage) {
	this.name = name;
	this.age = age;
	this.phone = phone;
	this.email = email;
	this.address = address;
	this.profileImage = profileImage;
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

var TextFeed = function(url) {
	this.url = url;
	this.getFeed = function() {
		return this.url;
	}
};

TextFeed.prototype = Object.create(Feed.prototype);
URLFeed.prototype = Object.create(Feed.prototype);

FeedService = {
	feedStore : [],

	createFeed: function(feed) {
	
		feed._id = "MyPost"+this.feedStore.length;
		feed._date = Date();
		if(feed instanceof URLFeed) {
			feed._type = "url";
		} else {
			feed._type = "text";
		}
		this.feedStore.unshift(feed);
	},
	
	deleteFeed: function(feedId) {
		
		for(var i = 0, size = this.feedStore.length; i < size; i++) {
			if(feedId === this.feedStore[i].getId()) {
				this.feedStore.splice(i, 1);
				break;
			}
		}
	}
};

ProfileService =  {
	
	profileStore : {},
	
	saveProfile : function(userid, profile) {
		this.profileStore.profile = profile;
		this.profileStore.userid = userid;
	}
};