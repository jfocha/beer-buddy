const fill = document.querySelector('.fill');
const box = document.querySelectorAll('.empty')

//Fill Listeners
fill.addEventListener('dragstart', dragStart());
fill.addEventListener('dragend', dragEnd());

//Drag Funtions
function dragStart() {
    console.log('start');
}

function dragEnd() {
    console.log('end')
}

var update = document.querySelector("#list-toDo");

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
		cardEl.classList.add("col", "s4");

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


makeCardEl();
