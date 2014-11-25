"use strict";

var FeedService = undefined;
var Feed = undefined;
var URLFeed = undefined;
var ProfileService = undefined;

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
		for(var i = 0; i < feedStore.length; i++) {
			if(feedId === feedStore[i].getId()) {
				feedStore.splice(i, 1);
				break;
			}
		}
	}
};

ProfileService =  {
	
	ProfileStore : [],
	
	saveProfile : function(profile) {
		
	}
};