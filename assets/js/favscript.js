

var update = document.querySelector("#favorites1");
var submitInput = document.querySelector("#search")

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


// var film ="annabelle";
//     $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + film + "&callback=?", function(json) {
//         			 if (json != "Nothing found."){                 
//         console.log(json);
//                      }
//                     });


// var cardEl = document.createElement("div");
// update.append(cardEl)
var makeCardEl = function (movieData) {
	// pageEl.innerHTML = "<h2 class='title'>New Releases</h2>"
	// for (let i = 0; i < 6; i++) {
		var cardEl = document.createElement("div");
		cardEl.classList.add("col", "s12", "m12", "list-group-item");

		var cardContainerEl = document.createElement("div")
		cardContainerEl.setAttribute("class", "card horizontal");
		cardEl.appendChild(cardContainerEl);

		var cardImageEl = document.createElement("div");
		cardImageEl.setAttribute("class", "card-image");
		cardImageEl.innerHTML = "<img src='http://image.tmdb.org/t/p/w300" + movieData.results[0].poster_path + "'></img>"; //image + "'></img>"; //"; //
		cardContainerEl.appendChild(cardImageEl);
		// It's possible to add a title on the image. Use: <span class="card-title">Card Title</span> in the innerHTML after the img.

		var cardStacked = document.createElement("div");
		cardStacked.setAttribute("class", "card-stacked");
		cardContainerEl.appendChild(cardStacked);

		var cardContentEl = document.createElement("div");
		cardContentEl.setAttribute("class", "card-contents"); //supposed to be card-content
		cardContentEl.innerHTML = ("<h5>" + movieData.results[0].title + "</h5>");			// "<p>" +  + "</p>"
		cardStacked.appendChild(cardContentEl);

		var cardActionEl = document.createElement("div");
		cardActionEl.setAttribute("class", "card-action");
		cardActionEl.innerHTML = ("<a href='https://www.themoviedb.org/movie/" + movieData.results[0].id + "-" + movieData.results[0].title + "' target='_blank'>" + movieData.results[0].title + "</a>");
		cardStacked.appendChild(cardActionEl);

		update.append(cardEl);
	// }
}

document.getElementById("form").addEventListener("submit", myFunction);

function myFunction(event) {
	event.preventDefault();
	var film = submitInput.value;
	submitInput.value = '';


	$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + film + "&callback=?", function(json) {
		if (json != "Nothing found."){                 
console.log(json);
makeCardEl(json)
		}
	   });

	//makeCardEl(image, title)  // find image and title from fetch


}

// enable draggable/sortable feature on list-group elements
$(".card .list-group").sortable({
	// enable dragging across lists
	connectWith: $(".card .list-group"),
	scroll: false,
	tolerance: "pointer",
	helper: "clone",
	activate: function(event, ui) {
	  $(this).addClass("dropover");
	  $(".bottom-trash").addClass("bottom-trash-drag");
	},
	deactivate: function(event, ui) {
	  $(this).removeClass("dropover");
	  $(".bottom-trash").removeClass("bottom-trash-drag");
	},
	over: function(event) {
	  $(event.target).addClass("dropover-active");
	},
	out: function(event) {
	  $(event.target).removeClass("dropover-active");
	},
	update: function() {
	  var tempArr = [];
  
	  // loop over current set of children in sortable list
	  $(this)
		.children()
		.each(function() {
		  // save values in temp array
		  tempArr.push({
			text: $(this)
			  .find("p")
			  .text()
			  .trim(),
			date: $(this)
			  .find("span")
			  .text()
			  .trim()
		  });
		});
  
	  // trim down list's ID to match object property
	  var arrName = $(this)
		.attr("id")
		.replace("list-", "");
  
	  // update array on tasks object and save
	  tasks[arrName] = tempArr;
	  saveTasks();
	}
  });



