"use strict";
var app = angular.module('feeds', []);

app.controller('FeedController', function() {
	
	this.post = {};
	this.feeds = FeedService.feedStore;
	this.tab = 1;
	
	/* do logout */
	this.logout = function() {
		window.location.href = "../index.html"
	};
	
	/* create a new text or url feed post */
	this.createPost = function() {

		var value = this.post.message;
		if(this.validatePost(value)){
			
			var n = value.search(/https|ftp|http/i);
			if(n < 0) {
				FeedService.createFeed(new TextFeed(value));
			} else {
				FeedService.createFeed(new URLFeed(value));
			}
		}
		this.post.message = "";
	};

	/* validation to check whether the post is empty or not */
	this.validatePost = function(post) {

		if(post.length == 0) {
			alert("post should not be empty");
			return false;
		}
		return true;
	};

	/* delete a particular post */
	this.deletePost = function(id) {
	
		FeedService.deleteFeed(id);
	};
	
	/* set the current tab */
	this.selectTab = function(num) {
		this.tab = num;
	}
});

