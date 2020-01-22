class TownElement {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends TownElement {
  constructor(name, buildYear, area, numOfTrees) {
    super(name, buildYear);
    this.area = area;
    this.numOfTrees = numOfTrees;
  }
  treeDensity() {
    const density = this.numOfTrees / this.area;
    console.log(
      `${this.name} has a tree density of ${density} trees per sq. km`
    );
  }
}

class Street extends TownElement {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classfication = new Map();
    classfication.set(1, "tiny");
    classfication.set(2, "small");
    classfication.set(3, "normal");
    classfication.set(4, "big");
    classfication.set(5, "huge");

    console.log(
      `${this.name}, built in ${this.buildYear}, is a ${classfication.get(
        this.size
      )} street`
    );
  }
}

const allPrks = [
  new Park("Park One", 1995, 0.2, 100),
  new Park("Park Two", 1997, 0.4, 200),
  new Park("Park Three", 1993, 0.8, 1203)
];

const allStreets = [
  new Street("Street One", 1996, 1.1, 2),
  new Street("Street Two", 1998, 0.8),
  new Street("Street Three", 1993, 6.1, 5),
  new Street("Street Four", 1994, 4.6, 4)
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log("===Parks Report===");

  //Density
  p.forEach(element => element.treeDensity());

  //Avg Age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} have an avg of ${avgAge} years.`);

  //which park has more than 1000 trees
  const ind = p.map(el => el.numOfTrees).findIndex(el => el >= 1000);
  console.log(`${p[ind].name} has more than 1000 trees. `);
}

function reportStreets(s) {
  console.log("===Street Report===");

  //Total and avg length of streets
  const [totalLength, avgLength] = calc(s.map(el => el.length));
  console.log(
    `Our ${s.length} streets have a total length of ${totalLength}, and avg length of ${avgLength}. `
  );

  //classify the size
  s.forEach(el => el.classifyStreet());
}

reportParks(allPrks);
reportStreets(allStreets);
