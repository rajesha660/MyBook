

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
	var feeds = FeedService.feedStore;
	var sOut = "";
	var feed;
	for(var i = 0, length = feeds.length; i < length; i ++ ) {
		
		feed = feeds[i];
		sOut += '<div class="feed">';
		sOut += 	'<img width="50" height="50" src="../images/thumbnail/empty-profile.png">';
		sOut += 	'<span class="feed_text">';
		sOut += 	feed instanceof URLFeed ? '<a href='+feeds[i].getFeed()+' target="_blank">'+ feed.getFeed() +'</a>': feed.getFeed();
		sOut += 	'</span>';
		sOut += 	'<span class="feed_time">';
		sOut += 	feed.getDate();
		sOut += 	'</span>';
		sOut += 	'<button class="delete_feed" id='+feed.getId()+' onclick="deletePost(this.id)">';
		sOut +=			'<img width="20" height="20" src="../images/thumbnail/close.png">';
		sOut += 	'</button>';
		sOut += '</div>';
	}
	list.innerHTML = "";
	list.innerHTML = sOut;
}

/* validation to check whether the post is empty or not */
function validatePost(post) {
	
	if(post.length == 0) {
		alert("post should not be empty");
		return false;
	}
	return true;
}

/* delete a particular post */
function deletePost(id) {
	FeedService.deleteFeed(id);
	setPost();
}