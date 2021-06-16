

var update = document.querySelector("#text");

// fetch("https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb")
// 	.then(response => {
// 		return response.json();
// 	}).then(data => {
// 		console.log(data);
// 		makeCardEl(data, true);

// 	})
// 	.catch(err => {
// 		console.error(err);
// 	});
var film ="annabelle";
    $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + film + "&callback=?", function(json) {
        			 if (json != "Nothing found."){                 
        console.log(json);
                     }
                    });
// var cardEl = document.createElement("div");
// update.append(cardEl)
var makeCardEl = function () {
	// pageEl.innerHTML = "<h2 class='title'>New Releases</h2>"
	// for (let i = 0; i < 6; i++) {
		var cardEl = document.createElement("div");
		cardEl.classList.add("col", "s6", "s3");

		var cardContainerEl = document.createElement("div")
		cardContainerEl.setAttribute("class", "card horizontal");
		cardEl.appendChild(cardContainerEl);

		var cardImageEl = document.createElement("div");
		cardImageEl.setAttribute("class", "card-image");
		cardImageEl.innerHTML = "<img src='http://image.tmdb.org/t/p/w300/yLsuU2P2SpDYFwtZQ7dtfVAf6TE.jpg'></img>"; //"; // + tm.results[i].poster_path + "'></img>";
		cardContainerEl.appendChild(cardImageEl);
		// It's possible to add a title on the image. Use: <span class="card-title">Card Title</span> in the innerHTML after the img.

		var cardContentEl = document.createElement("div");
		cardContentEl.setAttribute("class", "card-content");
		cardContentEl.innerHTML = ("<p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>");			// "<p>" +  + "</p>"
		cardContainerEl.appendChild(cardContentEl);

		var cardActionEl = document.createElement("div");
		cardActionEl.setAttribute("class", "card-action");
		cardActionEl.innerHTML = ("<a href='https://www.themoviedb.org/movie/"); //+ tm.results[i].id + "-" + tm.results[i].title + "' target='_blank'>" + tm.results[i].title + "</a>");
		cardContainerEl.appendChild(cardActionEl);

		update.append(cardEl);
	// }
}
 makeCardEl();
