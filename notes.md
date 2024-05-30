### intro the the web dvelopment

## browers wars

the war was betwwen netscape and IE

### 3 layer architechture

1. FE

- ANGULAR
- REACT JS

2.  BE

-
- DATABASE

```CSS
.red{


color:pink;

}
```

### selectors

caching is used whenever theres long time retrieve data  
cache depends
![]()

> logos are always in svg.  
>  svg(scalable vector graphics) :these have full clarity.

figma: to draw,design

### CICD

continous integration continous deployment

GIT:

### JS:

var t=null

> typeof(t)  
> 'object'

In web we dont fix problems/bugs
but we create new features.

## var declarations creating a variable

var---- can be changed.

let---- declarations cant be change

const------ cant be change

## var re-assigned 

var----can happen

let---- can be done

const----cannot be done

```javascript
const marks = [35, 45, 75];
marks[1] = 78;
console.log(marks);
```

but in case of array if one index is changed then it gets changed because of the address in which it is stored differently.
so hence we can change values inside at the particular address.

> pythontutor.com

 #                         DAY 2

 null datatype is object

### SCOPE:
LIFETIME OF VARIABLE:  
GC IS PRESENT
UNTIL IT IS USED IT WILL STAY IN MEMORY. 
AFTER THAT IT IS  NO LONGER PRESENT.
````javascript
   {
            var x1=10;//block scope
            let x2=20;//block scope
        }
this is the block scope.
````

Var can be declared and accessed globally. Let can be declared globally, but its access is limited to the block in which it is declared.  
 Variables declared using var can be re-declared and updated within the same scope. Variables declared with let can be updated but not re-declared within the same scope.


undefined---value
not defined----error
````javascript
 function fun(){
            var t1=10;
            let t2=20;
        }
        console.log(t1);
        console.log(t2);
````
the output for both is no defined.



## TypeCasting
var x1=3;  

var x2="5";  

console.log(x1+x2);//it is concatinating instead ofadd up. becuase it is overloaded.(priority to concate more than add)

console.log(x1-x2)// converts string to 5 thats why its 
 this is inbuilt implicit conversion or coercion.

  ## explicit conversion
  var x1=3;
  var x2="5";

  console.log(x1+parseInt(x2));  (doesnot allow decimal points )
  console.log( x1+ +x2);  
  these are the two methods.  
   
### conversions:
   if [2,4,5] +"abc"
    then it converts everything into string
    so output is '2,4,5abc'

[]+[] (its is empty string+empty string)  
so output is empty string. 
output is:  ' '
 
 ARRAY +STRING=STRING  
 ARRAY +ARRAY=STRING  
  

  null+5=  

output=5  

  null is 0 in this case.


4*"5a"
op:Nan  

NaN/3 
op:NaN  

typeof(NaN)(it is trying to converting into number thats why the type of nan is number).
 op:'number'


which is faster ?why?  

var g1=5;
var g2="5";  
console.log(g1==g2)
console.log(g1===g2)
== allows typecasting(string is converted into number and verification is done)  

=== doesnot allow type casting( only 1 step is done. )  

=== is faster than  ==

# TYPES OF FUNCTIONS
- Normal function  
- Arrow function  
- Anonymous Function  
## NORMAL FUNCTION
```javascript
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
```
## Arrow function

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
```

why functions?
DRY-TUMB RULE-DONT REPEAT YOURSELF. 
ABSTRACT A LOGIC INTO FUNCTION
chnage in one place it reflects everywhere. (it affects everywhere)  

modularity.
   ```

   whom we are writing code?  
   for other teammates
# how do u measure code quality?
5 pillars
1. Readability-75%
2.  Maintability(code debts----U'll make this code better 2mrw, but 2mrw never comes)(we shuld not have the code that is not maintainable)
3.  Extensibility(it shuld be easy to add features)
4. Testability
5. performance(space &time complexity)
readability>perfomance


## copy by value
var q1=[100,200];
var q3=[...q1];  
... ---> is the spread operator
then q3=[100,200]
 if it is  q1.push(100)
 then q1 is [100,200,100]
q3 is [100,200]
beacuse it is value not address to get changed.





var q1=[100,200];
var q3=[q1];  
//it is nested array output


## Loops
```javascript
const marks=[80,90,100];
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
```

