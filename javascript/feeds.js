"use strict";
var app = angular.module('feeds', ['services']);

app.controller('FeedController',['FeedService', function(FeedService) {
	
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
			FeedService.createFeed(value);
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
	
	this.isSelectedTab = function(num) {
		return this.tab === num;
	}
}]);

