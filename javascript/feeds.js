/* hide the profile container */
(function(){
	var profile = document.getElementById("profile_container");
	profile.hidden = true;
})();

/* do logout */
function logout() {
	window.location.href = "../index.html"
}

/* hide the profile and show the feed */
function showFeed() {
	
	var profile = document.getElementById("profile_container");
	var feed = document.getElementById("feed_container");
	
	profile.hidden = true;
	feed.hidden = false;
}

/* hide the feed and show the profile */
function showProfile() {
	
	var profile = document.getElementById("profile_container");
	var feed = document.getElementById("feed_container");
	
	profile.hidden = false;
	feed.hidden = true;
}

function createPost() {
	
	var post = document.getElementsByName("newpost")[0];
	var value = post.value;
	if(validatePost(value)){
		
		var n = value.search(/https|ftp|http/i);
		if(n < 0) {
			FeedService.createFeed(new TextFeed(value));
		} else {
			FeedService.createFeed(new URLFeed(value));
		}
	}
	post.value = "";
	setPost();
}

function validatePost(post) {
	
	if(post.length == 0) {
		alert("post should not be empty");
		return false;
	}
	return true;
}