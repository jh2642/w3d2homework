$(document).ready(function(){

var movies=[]
  var movie1={}
  var movie2={}
  var movie3={}
  var movie4={}
  var movie5={}

movie1 = {
  title: 'The Wizard of Oz',
  genre: 'Fantasy',
  year: 1939,
  topActors: ['Judy Garland','Frank Morgan','Ray Bolger'],
  rating: 6.9
};

movie2 = {
  title: 'Into The Woods',
  genre: 'Fantasy',
  year: 2014,
  topActors: ['Anna Kendrick','James Corden','Meryl Streep'],
  rating: 5.7
};

movie3 = {
  title: 'Waiting to Exhale',
  genre: 'Romance',
  year: 1995,
  topActors: ['Whitney Houston','Angela Bassett','Loretta Devine'],
  rating: 5.9
};

movie4 = {
  title: 'Heathers',
  genre: 'Drama',
  year: 1988,
  topActors: ['Winona Ryder','Christian Slater','Shannon Doherty'],
  rating: 7.0
};

movie5 = {
  title: 'Gremlins',
  genre: 'Fantasy',
  year: 1984,
  topActors: ['Zach Galligan','Phoebe Cates','Polly Holliday'],
  rating: 6.6
}
movies.push(movie1,movie2,movie3,movie4,movie5)
console.log (movies)

movies.sort(function(currentMovie, nextMovie) {
  if (currentMovie.title < nextMovie.title) {
    return -1;
  }
  if (currentMovie.title > nextMovie.title) {
    return 1;
  }
  return 0;
})

movies.sort(function(higherRating, nextRating) {
  if (higherRating.rating > nextRating.rating) {
    return -1;
  }
  if (higherRating.rating < nextRating.rating) {
    return 1;
  }
  return 0;
})
movies = JSON.stringify(movies)
console.log(movies)

})
