var str = "jhon,leo";
var objArr = [
  { id: 1, name: "leo" },
  { id: 2, name: "jhon" },
  { id: 3, name: "rachel" }
];
var output = [];

var namesArr = str.split(",");
console.log(namesArr);

for (var obj = 0; obj < objArr.length; obj++) {
  for (var n = 0; n < namesArr.length; n++) {
    if (objArr[obj].name === namesArr[n]) {
      output.push(objArr[obj]);
    } else {
      continue;
    }
  }
}

console.log(output);


///Using array methods 
 let names = 'Jhon, Leo';
 let lists = [
    { id: 1, name: "Leo" },
    { id: 2, name: "Jhon" },
    { id: 3, name: "Rachel"}
  ];

  const out = lists.filter(status => names.split(',').some(el => el === status.name));
  console.log(out);
