/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/
let person = { 
  name: `lianne`,
  age: 26,
  city: `kuwait`

}
console.log(person)


/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
person.email = `liannealq@hotmail.com`
console.log(person)
/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/

let array = { name: 'John', age: 25 }

function hasKey (obj,key) {
  if (obj[key]) { return true} else {return false} 
}

// function hasKey (obj,key) {
//   if (obj[key]) { return true} else {return `try again`} 
// }
console.log(hasKey(array,`city`))





const movies = [
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: "Drama",
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      genre: "Crime",
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      genre: "Crime",
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: "Action",
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: "Drama",
    },
  ];
  /******************************
      Q4) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to log the titles of all the movies.
  ********************************/

// movies.filter( (movie)=>{console.log (movie.title)})

// function printIt(x){console.log(x.title)}
// movies.filter(printIt)

// function printIt(x){console.log(x.title)}
// movies.forEach(printIt)

// function moviesTitle (movie) { console.log(movie.title)}
// console.log (movies.forEach( moviesTitle))




  /******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
  
// let released = []
// released = movies.map((movie)=>{if (movie.year == 1994) {return movie.name} } )


// console.log (released.length)

 


// function movieLengths(movies){
//   const filtered = movies.filter(movie => movie.year === 1994).length ;
//   return filtered;
// }
// console.log(movieLengths(movies));

// // menawer answer: 
// function filteryear (x){
//     return x.year == 1994 
// }
// let filtered = movies.filter(filteryear).length 
// // // bc filter return an array 
// console.log (filtered)


  /******************************
      Q6) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/


let x = movies.map( (movie)=>{if (movie.title == "The Dark Knight"){return movie.genre = "Action/Drama"}
return movies} )

console.log(x)


