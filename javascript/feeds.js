/* hide the profile container */
(function(){
	var profile = document.getElementById("profile_container");
	profile.hidden = true;
	setPost();
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

/* create a new text or url feed post */
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

/* create the list of all the posts */
function setPost() {
	
	var list = document.getElementById("post_list");
	var fragment = document.createDocumentFragment();
	var feeds = FeedService.feedStore;
	for(var i = 0, length = feeds.length; i < length; i ++ ) {
		var element = document.createElement("div");
		element.appendChild(document.createTextNode( feeds[i].getFeed() ));
		fragment.appendChild(element);
	}
	list.innerHTML = "";
	list.appendChild(fragment);
}

/* validation to check whether the post is empty or not */
function validatePost(post) {
	
	if(post.length == 0) {
		alert("post should not be empty");
		return false;
	}
	return true;
}