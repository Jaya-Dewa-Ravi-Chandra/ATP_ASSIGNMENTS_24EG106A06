/*
ASSIGNMENT 4:
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
 */
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

console.log("Sci-Fi movies:\n:",movies.filter(obj=>obj.genre="Sci-Fi"))

let a=movies.map(obj=>{if (obj.title=="Inception" && obj.rating==8.8) return `${obj.title}(${obj.rating})`} )
console.log("Map output:",a.reduce(obj=>obj))

console.log(("Average Movie Rating:",movies.reduce((acc,obj)=>acc=acc+obj.rating,0))/movies.length)

console.log("Anout Joker:\n",movies.find(obj=>{if(obj.title=="Joker")
                                                  return obj}))
                                                  
console.log("Index of Avengers:",(movies.findIndex(obj=>obj.title=="Avengers")))