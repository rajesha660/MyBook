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