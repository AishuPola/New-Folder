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
    arr.push(sum)
  }
  let t = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      t = i;
    }
  }
  
  console.log(movies[t].title)