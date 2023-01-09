//  if elese

var watch = "football";

if (watch == "cricket"){
    console.log("i will watch cricket");

}
else{
    console.log("i will watch football");
}


//  challenege leap year
debugger;
var leap = 2400;
if(leap % 4 == 0){
    if(leap % 100 == 0){
        if(leap % 400 == 0){
            console.log("year is leap")
        }else
        console.log("not a leap year");
    }else
    {
        console.log("leap year");
    }

}else{
    console.log("year is not a leap");
}

//  5 falsy values in javascript
//  NaN, null, undefined, 0 , "" are the falsy values

//var score = 0;
if(score = 0 ){
    console.log("we lost the game");
}else{
    console.log("we won the game");
}


if (score = NaN) {
    console.log("we lost the game");
}else{
    console.log("we won the game");
}


//  ternary operator takes 3 operands"

//  variable name = condition?value1:value2   





var a = 40;
var b = '40';

console.log(a-b);