var jhon = {
    fullname: 'Jhon Smith',
    mass: 56,
    height: 1.7,
    calcBMI: function(){
        this.bmi = this.mass/(this.height*this.height);
    }
}
jhon.calcBMI();
console.log(jhon);
var mark = {
    fullname: 'Mark Wynn',
    mass: 37,
    height: 1.3,
    calcBMI: function(){
        this.bmi = this.mass/(this.height*this.height);
    }
}
mark.calcBMI();
console.log(mark);

var highBMI = jhon.bmi > mark.bmi ? 'jhon':'mark';
console.log(highBMI);