/*const marks=[80,90,100];
//more control
for (let index=0;index<marks.length;index++){
    console.log("index:",index,"marks",marks[index]);
}

//readbale and simple
for(let idx in marks){//in-->index
    console.log("index:",idx,"marks:",marks[idx]);
}
//readable and cleaner
for(let mar of marks){
    console.log("mark:",mar);
} 
//here we dont have acces of index here so its better to use in than of
  
//array of objects
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
  result =result+ item.price * item.quantity;
}

console.log("The Total Price of all fruits : " + result);

//task-2

const books = [
    { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
    { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
    { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
    { title: "Sapiens", rating: 4.9, genre: "History" },
    { title: "Clean Code", rating: 4.7, genre: "Technology" },
  ];
  let book_arr=[];
for (let book of books){
    if(book.rating>=4.7)
        book_arr.push(book.title);
}
console.log(book_arr);

//task-3
const employes = [
    { id: 1, name: "Alice", grade: 78 },
    { id: 2, name: "Bob", grade: 85 },
    { id: 3, name: "Charlie", grade: 92 },
    { id: 4, name: "David", grade: 88 },
    { id: 5, name: "Eva", grade: 76 },
  ];
  let arr=[];
  for ( let emp in employes){
    if(employes[emp].grade>=80){
        arr.push({id:employes[emp].id, status:"promoted"});

     //goodemployees.push({...employee,status:"promoted",});to get all the details instead of writing again and again.
        
      


    }

  }
  console.log(arr);
//spreads can be used in array of objects also.

  //task-4
  const movies = [
    { title: "Inception", ratings: [5, 4, 5, 4, 5] },
    { title: "Interstellar", ratings: [5, 5, 4, 5, 4] },
    { title: "Dunkirk", ratings: [4, 4, 4, 3, 4] },
    { title: "The Dark Knight", ratings: [5, 5, 5, 5, 5] },
    { title: "Memento", ratings: [4, 5, 4, 5, 4] },
  ];
 
  var arr2 = [];
  var max = 0;
  for (let movie of movies) {
    let sum = 0;
    for (let i of movie.ratings) {
      sum = sum + i;
    }
    sum = sum / movie.ratings.length;
    arr2.push(sum)
  }
  let t = 0;
  let q = 0;
  for (i of arr2) {
    if (i > max) {
      max = i;
      q = t;
    }
    t = t + 1;
  }
  
  console.log(movies[q].title)