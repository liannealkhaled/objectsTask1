/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/
// let person = {
//     name: `lianne`,
//     age: 26,
//     city: `kuwait`
  
// }

/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/

// person.emailAddress = `liannealq@hotmail.com`
// console.log (person)

/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/
// menawer answer : 
// const p1 = {
//     name: `john`
//     age: 25
// }
// function hasKey (obj,key){
// if (obj[key]) return true; else return false
// }
// hasKey(p1, `age`)

// function hasKey(obj,key) { 
//     if (Obj[key]) {return true}
//     else {return false}
// }

// hasKey(person.year)

// function haskey (obj,key){ 
// console.log(obj.hasOwnProperty(key))} ;

// haskey(person,`year`)

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
  
//   function printIt(x){console.log(x.title)}
  
//   movies.forEach(printIt)

  /******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
  
  function printIt(x) {
    if ( x.year == 1994 ){ 
        console.log (x.name)
  }

}
printIt(movies)

// menawer answer: 
// function filteryear (x){
//     return x.year == 1994 
// }
// let filtered = movies.filter(filteryear).length 
// // bc filter return an array 
// console.log (filtered)



  
  /******************************
      Q6) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/

  
  