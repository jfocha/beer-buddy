newReleasesEl = document.querySelector("#new-releases");

// fetch movie info from omdb
fetch("http://www.omdbapi.com/?i=tt3896198&apikey=68149114")
	.then(response => {
		return response.json();
	}).then(data => {
		console.log(data);
		console.log("here 1");
	})
	.catch(err => {
		console.error(err);
	});

// fetch movie poster
//console.log($.getJSON("https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb"));

fetch("https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb")
	.then(response => {
		return response.json();
	}).then(data => {
		console.log(data);
		makeCardEl(data, true);

	})
	.catch(err => {
		console.error(err);
	});

// $('#term').focus(function(){
// 	var full = $("#poster").has("img").length ? true : false;
// 	if(full == false){
// 	   $('#poster').empty();
// 	}
//  });

// var displayNewReleases = function () {

// }

//  var getPoster = function(){
// 	  var film = $('#term').val();
// 	   if(film == ''){
// 		  $('#poster').html('<div class="alert"><strong>Oops!</strong> Try adding something into the search field.</div>');
// 	   } else {
// 		  $('#poster').html('<div class="alert"><strong>Loading...</strong></div>');
// 		  $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + film + "&callback=?", function(json) {
// 			 if (json != "Nothing found."){                 
// console.log(json);
// 				   $('#poster').html('<p>Your search found: <strong>' + json.results[0].title + '</strong></p><img src=\"http://image.tmdb.org/t/p/w300/' + json.results[0].poster_path + '\" class=\"img-responsive\" >');
// 				} else {
// 				   $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=goonies&callback=?", function(json) {
// 					 console.log(json);
// 					  $('#poster').html('<div class="alert"><p>We\'re afraid nothing was found for that search.</p></div><p>Perhaps you were looking for The Goonies?</p><img id="thePoster" src="http://image.tmdb.org/t/p/w500/' + json[0].poster_path + ' class="img-responsive" />');
// 				   });
// 				}
// 		   });
// 		}
// 	  return false;
//  }
//  $('#search').click(getPoster);
//  $('#term').keyup(function(event){
// 	 if(event.keyCode == 13){
// 		 getPoster();
// 	 }
//  });

var makeCardEl = function (tm, ob) {
	for (let i = 0; i < 6; i++) {



		var cardEl = document.createElement("div");
		cardEl.classList.add("col", "s12", "m2");

		var cardContainerEl = document.createElement("div")
		cardContainerEl.setAttribute("class", "card");
		cardEl.appendChild(cardContainerEl);

		var cardImageEl = document.createElement("div");
		cardImageEl.setAttribute("class", "card-image");
		cardImageEl.innerHTML = "<img src='http://image.tmdb.org/t/p/w300" + tm.results[i].poster_path + "'></img>";
		cardContainerEl.appendChild(cardImageEl);
		// It's possible to add a title on the image. Use: <span class="card-title">Card Title</span> in the innerHTML after the img.

		var cardContentEl = document.createElement("div");
		cardContentEl.setAttribute("class", "card-content");
		cardContentEl.innerHTML = ("<p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>");			// "<p>" +  + "</p>"
		cardContainerEl.appendChild(cardContentEl);

		var cardActionEl = document.createElement("div");
		cardActionEl.setAttribute("class", "card-action");
		cardActionEl.innerHTML = ("<a href='https://www.themoviedb.org/movie/" + tm.results[i].id + "-" + tm.results[i].title + "' target='_blank'>" + tm.results[i].title + "</a>");
		cardContainerEl.appendChild(cardActionEl);

		newReleasesEl.append(cardEl);
	}
}