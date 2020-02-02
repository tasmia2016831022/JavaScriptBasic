
// start with strings, numbers and booleans

let age = 100;
let age2 = age;
console.log(age,age2);
age = 200;
console.log(age,age2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
console.clear();

const team = players;

console.log(team, players);

// You might think we can just do something like this:

team[3] = 'Mary';
console.log(team,players);



// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
console.log(team2);

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
console.log(team3)

// or use the new ES6 Spread
const team4 = [...players];
const team5 = Array.from(team4);

// now when we update it, the original one isn't changed
team4[3] = 'Markkkk';
console.log(team4);
console.log(team5);

// The same thing goes for objects, let's say we have a person object
console.clear();
// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const captain = person ;
captain.number = 99;
console.log(person);


// how do we take a copy instead?
const cap2 = Object.assign({}, person, {number : 222});
console.log(cap2);

// We will hopefully soon see the object ...spread
const cap3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.


const wes = {
    name: 'Wes',
    age: 100,
    social: {
      twitter: '@wesbos',
      facebook: 'wesbos.developer'
    }
  };

  console.clear();
  console.log(wes);
//lvl 1 deep
  const dev = Object.assign({}, wes);
//full clone
  const dev2 = JSON.parse(JSON.stringify(wes));