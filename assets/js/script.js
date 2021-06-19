var pageEl = document.querySelector("#page");
var newReleases = [];

// fetch movie info from omdb
fetch("https://www.omdbapi.com/?i=tt3896198&apikey=68149114")
    .then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        console.log("here 1");
        // myFunction (data);
    })
    .catch(err => {
        console.error(err);
    });

// fetch movie poster
//console.log($.getJSON("https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb"));

// Google maps api key: AIzaSyB4dt1YA1uR7QHxQXmtJ154i3t_5WtXlgA

fetch("https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb")
    .then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        // makeCardEl(data, true);

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

// myFunction() {
// 	var poltstuff = results.plot
// 	return results
// };

var makeCardEl = function(tm, ob) {
    // pageEl.innerHTML = "<h2 class='title'>New Releases</h2>"
    // for (let i = 0; i < 6; i++) {
    //     var cardEl = document.createElement("div");
    //     cardEl.classList.add("col", "s12", "m2");

    //     var cardContainerEl = document.createElement("div")
    //     cardContainerEl.setAttribute("class", "card");
    //     cardEl.appendChild(cardContainerEl);

    //     var cardImageEl = document.createElement("div");
    //     cardImageEl.setAttribute("class", "card-image");
    //     cardImageEl.innerHTML = "<img src='http://image.tmdb.org/t/p/w300" + tm.results[i].poster_path + "'></img>";
    //     cardContainerEl.appendChild(cardImageEl);
    //     // It's possible to add a title on the image. Use: <span class="card-title">Card Title</span> in the innerHTML after the img.

    //     var cardContentEl = document.createElement("div");
    //     cardContentEl.setAttribute("class", "card-content");
    //     cardContentEl.innerHTML = ("<p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>"); // "<p>" +  + "</p>"
    //     cardContainerEl.appendChild(cardContentEl);

    //     var cardActionEl = document.createElement("div");
    //     cardActionEl.setAttribute("class", "card-action");
    //     cardActionEl.innerHTML = ("<a href='https://www.themoviedb.org/movie/" + tm.results[i].id + "-" + tm.results[i].title + "' target='_blank'>" + tm.results[i].title + "</a>");
    //     cardContainerEl.appendChild(cardActionEl);

    //     pageEl.append(cardEl);
    // }
}

var searchMovie = function(tm, ob) {
    // when submit button is entered, clear the page and display the searched movie.
    // get show times
    // ask to add to favorites
    // pageEl = "";
}

// var pageEl=("");
// add drag and drop cards
// add search function => makes cards
var favorites = function() {

};


// search by popularity in descending order 
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w200'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query="';

pageEl.innerHTML = "<h2 class='title'>New Releases</h2>";
getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

newReleases = data.results;

    showMovies(data.results)
    console.log(data.results)
}

function showMovies(movies) {
    // pageEl.innerHTML = ''
    // pageEl.innerHTML =  switch to the correct container

    movies.forEach((movie, index) => {
        // if(index % 6 === 0){

        // }
        // destructuring 
        var { title, poster_path, overview, id} = movie;


        var cardContainerEl = document.createElement("div");
        cardContainerEl.classList.add("col", "s12", "m2");

        var cardEl = document.createElement('div');
        cardEl.className = 'card';
        cardContainerEl.appendChild(cardEl);

        var cardImageContainerEl = document.createElement('div');
        cardImageContainerEl.className = 'card-image vert';
        cardEl.appendChild(cardImageContainerEl);

        var imgEl = document.createElement('img');
        if (!poster_path) {   
            imgEl.src = "./assets/images/movie-not-found.jpg";
        } else {
            imgEl.src = IMG_PATH + poster_path;
        }
        // var spanEl = document.createElement('span');
        // spanEl.className = 'card-title';
        // spanEl.textContent = title;

        var cardContentEl = document.createElement('div');
        cardContentEl.className = "card-content";
        cardContentEl.innerHTML = `<p>${overview}`;
        cardEl.appendChild(cardContentEl);


        cardImageContainerEl.appendChild(imgEl);
        // cardImageContainerEl.appendChild(spanEl);

        var cardActionEl = document.createElement("div");
        //cardActionEl.setAttribute("class", "card-action");
        cardActionEl.classList.add("card-action", "truncate"); 
        cardActionEl.innerHTML = ("<a href='https://www.themoviedb.org/movie/" + id + "' target='_blank'>" + title + "</a>"); //need to search by movie id, not title
        cardEl.appendChild(cardActionEl);



        // var cardContainerEl = document.createElement('div');
        // cardContainerEl.className = 'card';
        // cardEl.appendChild(cardContainerEl)

        // var cardImageElContainer = document.createElement('div');
        // cardImageElContainer.className = "card-image";
        // cardContainerEl.appendChild(cardImageElContainer);

        // var cardImageEl = document.createElement('img');
        // cardImageEl.src = `
        // $ { IMG_PATH + poster_path }
        // `
        // // cardImageElContainer.appendChild(cardImageEl);

        // // var cardContentEl = document.createElement('div')
        // // cardContentEl.className = 'card-content';
        // // cardContentEl.innerHTML = ` < p > $ { overview } < /p>`
        //     // var paraEl = document.createElement('p');
        //     // paraEl.textContent = `${overview}`;
        //     // cardContentEl.appendChild(paraEl);

        // cardImageEl.appendChild(cardContentEl);

        pageEl.appendChild(cardContainerEl);

    })

}



var form = document.getElementById('form');
var search = document.getElementById('search')

form.addEventListener("submit", (event) => {
    event.preventDefault();

    var searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        pageEl.innerHTML = ''
        pageEl.innerHTML = "<h2 class='title'>Your Results:</h2>"
        getMovies(SEARCH_API + searchTerm);
        search.value = '';

    } else {
        window.location.reload();
    }
})