const movies = [
  { title: "Inception", ratings: [5, 4, 5, 4, 5] },
  { title: "Interstellar", ratings: [5, 5, 4, 5, 4] },
  { title: "Dunkirk", ratings: [4, 4, 4, 3, 4] },
  { title: "The Dark Knight", ratings: [5, 5, 5, 5, 5] },
  { title: "Memento", ratings: [4, 5, 4, 5, 4] },
];

var arr = [];
var max = 0;
for (let movie of movies) {
  let sum = 0;
  for (let i of movie.ratings) {
    sum = sum + i;
  }
  sum = sum / movie.ratings.length;
  arr.push(sum);
}
let t = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    t = i;
  }
}

console.log(movies[t].title);

//object methods
let salaries = {
  john: 100,
  peter: 300,
  Mary: 300,
};

console.log(Object.keys(salaries));
console.log(Object.values(salaries));

//Template literal
//using backtick it makes code more readbale. just dollar and curly braces.
//it also supports multiline string with help of backtick .
const quotes = `Dream is not that u see in sleep, dream is something that does not let u sleep`;

const movieUrl = (domain, genre, year) =>
  `http://${domain}?genere=${genre}&year=${year}`;
//return "http://" + domain + "?genere=" + genre + "&year=" + year;

console.log(movieUrl("imdb.com", "thriller", 2020));
//refactoring u're not adding any feature,code will work in same way but quality better-->functionality same.

/*//ARRAY DESTRUCTURING
const[t1,t2]=[100,200];
const[t1,t2,t3]=[100,50];
//this gives an error undefined infor t3
const[a1,a2,a3=80]=[100,200]*/
/*when it is undefined it is taken as 80
default value is taken only wen it is undefined
const[]
const[a1,a2,a3=80]=[100,200,500];
here 500 is defined thats why a3 is taken as 500 instead of 80.*/

//const[,t1,t2,t3=80]=[100,200,null];
//console.log(t1,t2,t3);
//100,200,null

//object destructuring
//improve code quality

const { name, networth, power } = {
  name: "Tony",
  house: "🛖",
  networth: "💰💰💰",
  power: "💪",
};
console.log(name);
console.log(networth);
console.log(power);

//diff between the:
/*arry:unpacking is done using indexe
object:unpacking is done using keys
*/

const cart = [
  { name: "apple", price: 0.5, quantity: 4 },
  { name: "banana", price: 0.25, quantity: 6 },
];

const newItems = [
  { name: "Cherry", price: 0.75, quantity: 5 },
  { name: "Date", price: 1, quantity: 3 },
];

//   Ex 1.1: Combine cart + newItems
const comb = [...cart, ...newItems];

var result = 0;
for (let item of comb) {
  const { price, quantity } = item;
  result += price * quantity;
  console.log(result)
}

console.log("The Total Price of all fruits : " + result);
// by using destructing

//for(let{price,quality}of comb){

//}


var height=150;
var final=140||height;
console.log(final);



var avgtemp=20
var temp=0||avgtemp;
console.log(temp);

//20(falsy values are followed here)
var avgtemp=20;
var temp=0??avgtemp;
console.log(temp);
//0(for null and undefined  falsy table is followed)
//... is also used as rest operator-