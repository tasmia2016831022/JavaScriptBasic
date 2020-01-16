// let and const

///es5

var name5 = 'Jane Smith';
var age5 = 34;

name5 = 'James';
console.log(name5);

///es6

const name6 = 'james'; // cannot be changed 
let age6 = 45; // old var 
//name6 = 'dj';
//console.log(name6); // will show error

//ES5

function drivingLicence5(passedTest){

    if(passedTest){
        var firstName = 'Jhon';
        var birth = 1990;

        //console.log(firstName + ' born in '+birth+'is officially allowed to drive a car.');
    }
    console.log(firstName + ' born in '+birth+'is officially allowed to drive a car.');

}

drivingLicence5(true);

//ES6

function drivingLicence6(passedTest){

    if(passedTest){
        let firstName = 'Jhon';
        const birth = 1990;

        // console.log(firstName + ' born in '+birth+'is officially allowed to drive a car.');
    }

    //console.log(firstName + ' born in '+birth+'is officially allowed to drive a car.'); //will get error


}

drivingLicence6(true);


let i = 23;

for(let i =0; i<5;i++){
    console.log(i);
}

console.log(i);

var j = 47;

for(var j=0;j<5;j++){
    console.log(j);
}
console.log(j);


///Blocks and IIFEs

{
    const a = 1;
    let b =2;
}

///strings

let herName = 'Rachel';
let hisName = 'Harold';
const birth = 1990;

function calcAge(year){
    return 2020 - year;
}

console.log(`This is ${herName} and ${hisName} met in year of ${calcAge(birth)} .`)


const test = `${herName} ${hisName}`;
console.log(test.startsWith('R'));
console.log(test.endsWith('ld'));
console.log(test.includes(' '));

///Arrow function
const years = [12, 13, 14, 15];

var ages5 = years.map(function(el){
    return 20 - el;
});
console.log(ages5);

let ages6 = years.map(el => 20-el);
console.log(ages6);


ages6 = years.map((el, index)=> `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el,index) => {
    const now = new Date().getFullYear();
    const age = now -el;
    return `Age element ${index+1}: ${age}.`

});

console.log(ages6);

///Arrow function lexical this keyword

//ES5

var box5 = {
    color:'green',
    position: 1 ,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click',function(){
            var str = 'This is box number '+ self.position + ' and it is '+ self.color;
            alert(str);
        });
    }
}

//box5.clickMe();

const box6 ={
    color: 'red',
    position: 3,
    clickThis: ()=>{
        document.querySelector('.orange').addEventListener('click',
        ()=>{
            var str = 'This is a box number '+this.position+' and it is '+this.color;
            alert(str);
        });
    }
}

box6.clickThis();



function Person(name){
    this.name = name ;
}


//ES5
Person.prototype.myFriend5 = function(){
    var arr = friends.map(function(el)
    {
        return this.name + ' is friends with '+el;
    }.bind(this));
    console.log(arr);
}

var friends = ['bob','jane','mark'];

new Person('jhon').myFriend5(friends);


//ES6

Person.prototype.myFriend6 = function(){
    var arr = friends.map((el)=>
    {
        return this.name + ' is friends 666 with '+el;
    });
    console.log(arr);
}

new Person('meena').myFriend6(friends);

///Destructuring 

//ES5

var jhon = ['Jhon',26];
var name = jhon[0];
var age = jhon[1];

//ES6

const [color , position] = ['red', 12];
console.log(color);
console.log(position);

const obj = {
    room : 'green',
    door : 'wood'
}

const {room , door} = obj;
console.log(room);
console.log(door);

const{room : a,door: b}=obj;
console.log(a);
console.log(b);

 function calcRetirement(year){
     const age = new Date().getFullYear() - year;
     return [age, 65-age];
 }

 const [age2 , retirement] = calcRetirement(1998);
 console.log(age2);
 console.log(retirement);

 ///Arrays 
 
 const boxes = document.querySelectorAll('.box');

 //ES5
 var boxesArr5 = Array.prototype.slice.call(boxes);
 boxesArr5.forEach(function(cur){
     cur.style.backgroundColor = 'dodgerblue';
 });

 //ES6
 //var boxesArr6 = Array.from(boxes);
 Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'red');


 //loop

 //ES6

 boxesArr6 = Array.from(boxes);

 for(const current of boxesArr6){
     if(current.className.includes('orange')){
         continue;
     }
     current.textContent = 'I change to orange';
 }

 //ES5
 //there are a bunch of children , which one is older than 18

 var ages = [12, 13, 14, 21, 9];

 var full = ages.map(function(cur){
    return cur >=18;
 });

 console.log(full);
 console.log(full.indexOf(true));
 console.log(ages[full.indexOf(true)]);

 //ES6
 let ele = ages.findIndex(cur => cur >=18);
 console.log(ele);

 let adult = ages.find(cur => cur >= 18);
 console.log(adult);

 console.log('+++++++++++');
 ///Spread Operator 

 //add four numbers 
 function addNumbers(a,b,c,d,e){
     return a+b+c+d+e;
 }
 var sum1 = addNumbers(1,2,3,4,5);
 console.log(sum1);


 ///ES5
 var num = [1,2,3,4,4];
 var sum2 = addNumbers.apply(null,num);
 console.log(sum2);

 //ES6
 const sum3 = addNumbers(...num);
 console.log(sum3);

 ///joing an array using spread operator 

 const famSmith = ['Jhon','Jane'];
 const famMike = ['Rumman', 'Meena'];
 const bigFam = [...famSmith,...famMike];
 console.log(bigFam);
 const anotherFam = [...famSmith,'Lily',...famMike];
 console.log(anotherFam);


 /// in nodeList

 const header = document.querySelector('h1');
 const all = [header,...boxes];

 Array.from(all).forEach(cur => cur.style.color = 'purple');

 console.log('----------------------');
 ///Rest Parameters

 //ES5
 function isFullAge5(limit){
     //console.log(arguments);
     var argsArr = Array.prototype.slice.call(arguments,1);
     //console.log(argsArr);

     argsArr.forEach(function(cur){
         console.log((20 - cur) >= limit);
     })

 }

 isFullAge5(8,12,13,14);

 //ES6

 function isFullAge6(limit,...years){
     years.forEach(current => console.log((2016-current) >= limit));
 }

 isFullAge6(18,1995,1996,2017);
console.log('-------------------------');
 ///Default Parameters 

//  function Student(obj){
//      this.semester = obj.name ? obj.name : 'dfsdf'; 
//      this.name = name;
//      //this.semester = semester;
//      //this.reg = reg;
//  }

//  var leo = new Student({name: 'Leo', reg: 14848});

///ES6

function Student(obj){
    this.subject = obj.subject? undefined : 'Chemistry';
    this.name = obj.name;
    this.roll = obj.roll;

}

var rach = {
    name: 'Rachel',
    roll: 12,
    subject: undefined
}

var rac = new Student(rach);

///Maps

const question = new Map();
question.set('ques','which drink contains more caffaine?');
question.set(1, 'water');
question.set(2, 'coffee');
question.set(3, 'juice');
question.set('correct',2);
question.set(true, 'Correct Answer');
question.set(false, 'Wrong Answer');

console.log(question.get('ques'));
console.log(question.size);

if(question.has(1)){
    console.log('Has 4');
}

question.forEach((value,key)=> console.log(`This is ${key} : ${value}`));

//question.clear();

for(let [key,value] of question.entries()){
    if(typeof(key)==="number"){
        console.log(`${key}: ${value}`);
    }
}

// const ans = parseInt(prompt('Write the correct answer '));
// console.log(question.get(ans === question.get('correct')));

///classes
class People{
    constructor(name, age ){
        this.name = name;
        this.age = age;
    }
    calculateBirthYear(){
        var BirthYear = 2020-this.age;
        console.log(BirthYear);
    }
    static greetings(){
        console.log('Hii');
    }
}

const pep = new People('Lia',20);
pep.calculateBirthYear();
People.greetings();

///subclasses

