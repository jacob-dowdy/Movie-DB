var movies = [
	{
	 title: "The Dark Knight",
	 rating: 4.5,
	 viewed: true
	},
	{
	 title: "Lethal Weapon",
	 rating: 4,
	 viewed: true
	},
	{
	 title: "Mad Max Fury Road",
	 rating: 5,
	 viewed: true
	},
	{
	 title: "Blade Runner",
	 rating: 3.5,
	 viewed: true
	}
   ]

//Loop through all movies in list
movies.forEach(function(movie){
	var result = "You have ";
	if(movie.viewed){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	console.log(result);
})


