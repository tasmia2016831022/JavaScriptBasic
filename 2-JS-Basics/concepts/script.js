//Data types
var firstName = 'Jhon';
console.log(firstName);
var lastName ='Smith';
var age = 28;
var fullAge = true;
console.log(fullAge);
 var job;
 console.log(job);
 job = 'teacher'
 console.log(job);

 //variable mutation


 
 var firstName = 'jhon';
 var age = 26;
 console.log(firstName+' '+age);

 var job,isMarried;
 job = 'teacher';
 isMarried = false;

 console.log(firstName+' is a '+age+' year old '+
 job+' Is he married? '+ isMarried);

 age = 'twenty-six';
 job = 'driver';

 alert(firstName+' is a '+age+' year old '+
 job+' Is he married? '+ isMarried);

 var lastName = prompt('What is his last name ?')
 console.log(firstName+' '+lastName);
 

 //Basic Operations
 
 
 var thisYear, yearJhon, yearMark;
 var ageJhon = 34;
 var ageMark = 56;
 thisYear = 2020;

 yearJhon = thisYear - ageJhon;
 yearMark = thisYear - ageMark;

 console.log(yearJhon);
 console.log(yearMark);


 //Logical operator 
 
 var jhonOlder = ageJhon > ageMark;
 console.log(jhonOlder);

 //typeof
console.log(typeof jhonOlder);


var now = 2018;
var yearJhon = 1989;
var fullAge = 18;

var isFullAge = now - yearJhon >= fullAge;
console.log(isFullAge);
// /*
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// */
 var x = (3+5)*4-6;
 console.log(x);
 

//if-else

var firstName = 'Jhon';
var civilStatus = 'single';

if(civilStatus === 'married')
{
    console.log("Goood");
}
else{
    console.log("yep");
}

//Ternary operator

var name = "kenon";
var age = 3;

age >= 17 ? console.log(name + ' can be a pilot')
: console.log(name + ' can be a boy');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//switch

// var job = 'driver';

switch(job){
    case 'teacher':
        console.log('teacher');
        break;
    case 'driver':
        console.log('car');
        break;
    default:
        console.log('nothing');
}

//truthy and falsy values
//falsy values : undefined , null , 0 , NaN
//truthy values : Not a falsy values

var height = 0;
 if (height || height === 0){
     console.log('defined');
 }else{
     console.log('not yet defined');
 }



//function

function calculateAge(birthYear){

    return 2020 - birthYear;
}

var age = calculateAge(1997);
console.log(age);

//function expressions

var whatDoYouDo = function(job, firstname){
    switch(job){
        case 'as':
            return firstname + ' how to code';
        case 'mass':
            return firstname + ' yes';
        default:
            return firstname +   ' no';
    }
}

// console.log(whatDoYouDo('mass','shema'));

//Array
var names = ['Jhon','Mark'];
var years = new Array(12,13,14);

//objects and properties

var jhon = {
    firstName: 'Jhon',
    birthYear: 1990,
    calcAge: function(){
        this.age = 2020 - this.birthYear;
    }
};

jhon.calcAge();
console.log(jhon);


