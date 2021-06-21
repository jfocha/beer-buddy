var submitInput = document.querySelector("#search")

var loadTasks = function () {
	tasks = JSON.parse(localStorage.getItem("tasks"));

	// if nothing in localStorage, create a new object to track all task status arrays
	if (!tasks) {
		tasks = {
			0: [],
			1: [],
			2: [],
			3: [],
			4: [],
			5: [],
			6: [],
			7: [],
			8: [],
			9: []
		};
	}

	// loop over object properties
	$.each(tasks, function (list, arr) {
		// then loop over sub-array
		arr.forEach(function (task) {
			console.log(list);
			makeCardEl(task.pic, task.link, task.text, list); // 3rd was list...
		});
	});
};

var makeCardEl = function (poster, movieId, movieTitle, favSpot) {

	var cardEl = document.createElement("div");
	cardEl.classList.add("col", "s12", "m12", "list-group-item", "hoverable");

	var cardContainerEl = document.createElement("div")
	cardContainerEl.setAttribute("class", "card horizontal");
	cardEl.appendChild(cardContainerEl);

	var cardImageEl = document.createElement("div");
	cardImageEl.setAttribute("class", "card-image");
	cardImageEl.innerHTML = "<img src='" + poster + "'></img>";
	cardContainerEl.appendChild(cardImageEl);

	var cardStacked = document.createElement("div");
	cardStacked.setAttribute("class", "card-stacked");
	cardContainerEl.appendChild(cardStacked);

	var cardContentEl = document.createElement("div");
	cardContentEl.setAttribute("class", "card-contents");
	cardContentEl.innerHTML = ("<h5>" + movieTitle + "</h5>");
	cardStacked.appendChild(cardContentEl);

	var cardActionEl = document.createElement("div");
	cardActionEl.setAttribute("class", "card-action");
	cardActionEl.innerHTML = ("<a href='" + movieId + "' target='_blank'>" + movieTitle + "</a>");
	cardStacked.appendChild(cardActionEl);

	// append to ul list on the page
	if (favSpot === "#consider") {
		$(favSpot).append(cardEl);
	} else {

		$("#favorites-" + favSpot).append(cardEl);
	}

}

document.getElementById("form").addEventListener("submit", searchForFavorite);

function searchForFavorite(event) {
	event.preventDefault();
	var film = submitInput.value;
	submitInput.value = '';


	$.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + film + "&callback=?", function (json) {
		if (json != "Nothing found.") {
			console.log(json);

			var posterImage = json.results[0].poster_path;
			var posterImageSrc = "http://image.tmdb.org/t/p/w200" + posterImage;

			var searchedId = json.results[0].id;
			var idLink = "https://www.themoviedb.org/movie/" + searchedId;

			var title = json.results[0].title;

			makeCardEl(posterImageSrc, idLink, title, "#consider")
		}
	});




}

// enable draggable/sortable feature on list-group elements
$(".card .list-group").sortable({
	// enable dragging across lists
	connectWith: $(".card .list-group"),
	scroll: false,
	tolerance: "pointer",
	helper: "clone",
	activate: function (event, ui) {
		$(this).addClass("dropover");
		$(".bottom-trash").addClass("bottom-trash-drag");
	},
	deactivate: function (event, ui) {
		$(this).removeClass("dropover");
		$(".bottom-trash").removeClass("bottom-trash-drag");
	},
	over: function (event) {
		$(event.target).addClass("dropover-active");
	},
	out: function (event) {
		$(event.target).removeClass("dropover-active");
	},
	update: function () {
		var tempArr = [];

		// loop over current set of children in sortable list
		$(this)
			.children()
			.each(function () {
				// save values in temp array
				tempArr.push({
					pic: $(this)
						.find("img")
						.attr('src')
						.trim(),
					text: $(this)
						.find("h5")
						.text()
						.trim(),
					link: $(this)
						.find("a")
						.attr('href')
						.trim()
				});
			});

		// trim down list's ID to match object property
		var arrName = $(this)
			.attr("id")
			.replace("favorites-", "");

		// update array on tasks object and save
		tasks[arrName] = tempArr;
		saveTasks();
	}
});

var saveTasks = function () {
	localStorage.setItem("tasks", JSON.stringify(tasks));
};


loadTasks();

