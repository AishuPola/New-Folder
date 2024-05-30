{

    var x1=10;//block scope(globally happend)
    let x2=20;//block scope(its within the block)
}
 console.log(x1);
 console.log(x2);

function fun(){
    var t1=10;
    let t2=20;
}
console.log(t1);
console.log(t2);


 function Testing(age){
if (age>18){
    let msg="eligible";
}
else{
    let msg="not eligible"
}
console.log("are" +msg);

}
Testing(20);


function Testing1(age){
if (age>18){
    var msg="eligible";
}
else{
    var msg="not eligible";
}
console.log("are" +msg);

}
Testing1(20);


