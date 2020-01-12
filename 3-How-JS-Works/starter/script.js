//Hoisting

calcAge(1998);
function calcAge(yr){
    console.log(2020-yr);
}
calcAge(1994);

//retirement(1990);
var retirement = function(year){
    console.log(65 - (2020 - year));
}

console.log(age);
var age = 37;
console.log(age);


function foo(){
    var age = 56
    console.log(age);
}
foo();
console.log(age);

console.log('SCOPE CHAINING');
//scope chaining
var a  = 'Hello!!';
first();

function first(){
    var b = 'Hi!';
    second();

    function second(){
        var c = 'Hey';
        third();
    }
} 

function third(){
    var d = ' Jhon';
    console.log(a+d);
}

//this keyword
console.log("This")

//console.log(this); // global

thistest(1998);
function thistest(yr){
    console.log(2016-yr);
    console.log(this);//method
}

var person = {
    name:'jhon',
    birth: 1992,
    calcAge: function(){
        console.log(this);
    }
};

person.calcAge();

var mike = {
    name: 'Mike',
    birth: 1996
};

mike.calcAge = person.calcAge;

mike.calcAge();

