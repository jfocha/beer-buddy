fetch("http://www.omdbapi.com/?i=tt3896198&apikey=68149114")
.then(response => {
	return response.json();
}).then(data=>{console.log(data)})
.catch(err => {
	console.error(err);
});