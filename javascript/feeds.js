"use strict";
/* hide the profile container */
(function(){

	var profile = document.getElementById("profile_container");
	document.getElementById("feed_btn").className = "active";
	document.getElementById("feed_btn");
	profile.hidden = true;
})();

var app = angular.module('feeds', []);

app.controller('FeedController', function() {
	
	this.post = {};
	this.feeds = FeedService.feedStore;
	
	/* hide the profile and show the feed */
	this.showFeed = function() {
		
		var profile = document.getElementById("profile_container");
		var feed = document.getElementById("feed_container");
		document.getElementById("feed_btn").className = "active";
		document.getElementById("profile_btn").className = "";

		profile.hidden = true;
		feed.hidden = false;
	};
	
	/* do logout */
	this.logout = function() {
		window.location.href = "../index.html"
	};
	
	/* hide the feed and show the profile */
	this.showProfile = function() {

		var profile = document.getElementById("profile_container");
		var feed = document.getElementById("feed_container");
		document.getElementById("feed_btn").className = "";
		document.getElementById("profile_btn").className = "active";
		
		profile.hidden = false;
		feed.hidden = true;
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
});

