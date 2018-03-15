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

var myPlaylist = [
	
	{
	"title":"American Boy",
	"artist":"Estelle Feat. Kanye West",
	"mp3Url":"https://www.youtube.com/watch?v=Ic5vxw3eijY",
	"imageUrl":"https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/American_Boy_UK_Cover.jpg/220px-American_Boy_UK_Cover.jpg",
	},
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3Url":"https://www.youtube.com/watch?v=UqyT8IEBkvY",
		"imageUrl":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3Url":"https://www.youtube.com/watch?v=s6fPN5aQVDI",
		"imageUrl":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Superstitions",
		"artist":"Stevie Wonder",
		"mp3Url":"https://www.youtube.com/watch?v=0CFuCYNx-1g",
		"imageUrl":"data:image/jpeg;base64,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",
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
  
	for(var i = 0; i < myPlaylist.length; i++){
		$("body").append("<h3>" + myPlaylist[i].title + "</h3>");
		$("body").append("<p>" + myPlaylist[i].artist + "</p>");
		$("body").append("<p>" + "<a href =" + myPlaylist[i].mp3Url + ">listen</a>" + "</p>");
		$("body").append("<p>" + "<img src =" + myPlaylist[i].imageUrl + ">" + "</p>");

	}
});

function displayList(){



  
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
