// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"American Boy",
	"artist":"Estelle Feat. Kanye West",
	"mp3Url":"https://open.spotify.com/track/4CFSOgSsTMe2M6AJoPddFt",
	"imageUrl":"https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/American_Boy_UK_Cover.jpg/220px-American_Boy_UK_Cover.jpg",
	"songLength": "3 mins, 57 secs"
};

var myPlayList = [
	
	{
	"title":"American Boy",
	"artist":"Estelle Feat. Kanye West",
	"mp3Url":"https://open.spotify.com/track/4CFSOgSsTMe2M6AJoPddFt",
	"imageUrl":"https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/American_Boy_UK_Cover.jpg/220px-American_Boy_UK_Cover.jpg",
	},
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3Url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"imageUrl":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3Url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"imageUrl":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3Url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"imageUrl":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

];



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  
$("body").append("<p>" + mySong.title + "</p>");
$("body").append("<p>" + mySong.artist + "</p>");
$("body").append("<p>" + "<a href =" + mySong.mp3Url + ">listen</a>" + "</p>");
$("body").append("<p>" + "<img src =" + mySong.imageUrl + ">" + "</p>");

});

function displayList(){



  
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
