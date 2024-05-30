function double(n){//n is the parameter
    return n*2;// what if there is no return?
    // then undefined is printed instead of the particular op. so return is imp
}//returning to function call
console.log(double(10));//10 is this argument 
//this is function call


//to ways to exit
//1.if it encounters a return
//2. or last of the body
   function double1(n){
    if(n>2){
        return 5;
    }
    console.log("Hi");
    console.log("Hi");
    console.log("Hi");
    console.log("Hi");

   };
   double1(9);
   double1(1);

   //Arrow function

   const double3=(n)=>{
    return n*2;
   };
//adv:if it is one line, it can done into this way (no need of return to mention)
const double4=(n)=>n*2;
  
function sum(a,b){
    return a+b;

}
sum(9,8);

const sum2=(a,b)=>a+b;
sum2(6,7);
//why functions?
//DRY-TUMB RULE-DONT REPEAT YOURSELF. 
//ABSTRACT A LOGIC INTO FUNCTION
//chnage in one place it reflects everywhere.
//modular
//readability.
//how do u measure code quality?
/* 1.readalibilty(understand the code,read the code)
2.Maintainability(code debt----U'll make this code better 2mrw, but 2mrw never comes)(we shuld not have the code that is not maintable)
3. Extensibility(it shuld be easy to add features)
   4. testability(make sure that they write the test cases easier.)
   5. performance(space &time complexity)(dont sacrifice readability for performance)
   readability>perfomance*/

