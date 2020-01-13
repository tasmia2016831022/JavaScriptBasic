// Function Constructor 

var jhon = {
    name : 'Jhon',
    birth: 1995,
    job: 'driver'
    //occ:34
};

var mark = {
    name : 'Mark',
    birth: 1995,
    job: 'teacher'
    //occ:34
};

//console.log(jhon.name);

var Person = function(name,birth,job){
    this.name = name;
    this.birth = birth;
    this.job = job;
    //this.ni = ni;
    this.calcAge = function(){
        console.log(2020-birth);
    };
    //console.log(jhon.name);
};
var jhon = new Person('min', 1995, 'driver');
var mark = new Person('mark',1996,'teacher');
jhon.calcAge();
//console.log(jhon.occ);

//console.log(jhon.name);

///Prototype Function

Person.prototype.testPrint = function(){
    console.log(this.name);
}

///Prototype property

Person.prototype.place = 'intern';

jhon.testPrint();
mark.testPrint();

console.log(jhon.place);

var jane = new Person('jane',6789,'consult');



console.log('Object.craeate')

///Object.create

var personProto = {
    calccuAge: function(){
        console.log(2222-this.birth);
    }
};

var jonny = Object.create(personProto);

var jonny = Object.create(personProto,
    {
        name: {value: 'jonny'},
        birth: {value: 1997},
        job:{value:'tailor'}

    });


    ///Passing function as an argument 

    var price = [10, 20, 30, 40];

    function calulator(array , func){
        var result = [] ;
        for( var i =0;i<array.length;i++)
        {
            result.push(func(array[i]))
        }
        return result;
    }

    function func(el){
        return 100-el;
    }
    var difference = calulator(price,func);
    console.log(difference);

    //Function Returning functions

    function bookStore(book){
        if(book === 'Literature')
        {
            return function(name){
                console.log(name + " bought a lit book");
            }
        }else if(book === 'fiction'){
            return function(name){
                console.log(name + " bought a fiction");
            }
        }else{
            return function(name){
                console.log(name+" bought nothing");
            }
        }
    }

    Litbook = bookStore('Literature');
    Litbook('Mark');

    bookStore('')('Jenny');
    bookStore()('ken');

    ///IIFE

    /// for data privcy
    /// only being called once 

    (function(){
        var score = Math.random()*10;
        console.log(score>2);
    })();

    (function(val){
        var score = Math.random()*val;
        console.log(score>2);
    })(4);


    ///Closure 

    function wallet(bookPrice){
        var a = ' is change ';
        return function(taka){
            var change = bookPrice - taka;
            console.log(change + a);
        }
    }

    var rate = wallet(30);
    rate(15);


    function interviewQuestion(job){
        return function(name){
            if(job === 'driver'){
                console.log(name + ' is a '+job);
            }else if (job === 'lawyr'){
                console.log(name + ' is a '+job);
            }
        }
    }

interviewQuestion('driver')('ken');


///Bind, call and apply


var jhon = {
    name : 'Jhon',
    age : 23,
    job : 'Painter',
    presentation : function(style,time){
        if(style === 'formal'){
            console.log('Good '+time+'.This is '+this.name+' age '+this.age+' job is '+this.job);
        }else if(style==='informal'){
            console.log('Hey Good '+time+'.Me '+this.name+' age '+this.age+' job is '+this.job);
        }
    }
}

jhon.presentation('formal','morning');
jhon.presentation('informal','evening');

var emily = {
    name: 'Emily',
    age: 56,
    job: 'Artist'
}

jhon.presentation.call(emily,'informal','afternoon');
jhon.presentation.apply(emily,['formal','noon']);

var jhonFormal = jhon.presentation.bind(jhon,'formal');
jhonFormal('morning');

var emilyInformal = jhon.presentation.bind(emily,'formal');
emilyInformal('morning');


