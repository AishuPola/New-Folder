a = "This is a beautiful place";
a = a.split("");
console.log(a);
a = a.slice(2, 3);
console.log(a);

function transformSentence(sentence) {
  // Your code here

  return sentence.toUpperCase().split(" ").reverse().join(" ");
}
// Task 6
let sentence = "Hello world from JavaScript";
let transformed = transformSentence(sentence);
console.log(transformed); // Output: "JAVASCRIPT FROM WORLD HELLO"

//task 7
// Task 7: Improving code quality

function processNames(names) {
    let result = [];
    
    for (let i = 0; i < names.length; i++) {
      let upperCaseName = names[i].toUpperCase().split(" ").join("_")
      result =result.push(upperCaseName);
    }
    return result;
  }
  
  const namesArray = ["john doe", "jane smith", "alice jones"];
  console.log(processNames(namesArray));
  

/*function processNames() {
  let result = [];
  for (let i in names) {
    var res = names[i].toUpperCase().split().join("_");
    result = result.push(re);
    
  }
  return result;


  const namesArray = ["john doe", "jane smith", "alice jones"];
  console.log(processNames(namesArray));
}*/
