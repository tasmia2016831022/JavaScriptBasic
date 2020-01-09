// BMI = mass/(height*height);
// mass in kg and height in meter
// store mass and height of Mark and Jhon
// Calculate BMI
// if Mark's is heigher than Jhon's
// print in console

// var heightMark = 1
// var heightJhon = 1.2

// var massMark = 56;
// var massJhon = 67;

// var MarkBMI = massMark / ( heightMark * heightMark );
// var JhonBMI = massJhon / ( heightJhon * heightJhon );

// isMark = MarkBMI > JhonBMI;

// console.log(MarkBMI , JhonBMI);
//  console.log(isMark);

// TeamJhon 89, 120, 103;
// TeamMike 116, 94, 123;
// average
// wins in avg
// print winner and draw
// TeamMary 97, 134, 105;
// avg print 
// change and see

// var TeamJhon = (89 + 300 + 103)/3;
// var TeamMike = (116 + 129 + 123)/3;

// var winner = TeamJhon > TeamMike ? 'Team Jhon'
// : 'Team Mike';
// console.log('Winner is '+winner);

// var TeamMary = (97 + 134 + 105)/3;

// if(TeamMary > TeamJhon && TeamMary > TeamMike)
//     {
//         console.log('Mary');
//     }else if(TeamJhon > TeamMary && TeamJhon > TeamMike )
//     {
//         console.log('Jhon');
//     }else{
//         console.log('Mike or drW')
//     }

// bills 124 48 268
// 20% tip if bill<50
// 15% tip if bill=50 to 200
// 10% tip if bill>200
// 2 arrays --> tips, paid
// 20/100

// var bills = [124, 48, 268];
// var tips = [], paid = [], i;
// function clacTip(num){
//     var tip;
//     if(num < 50){
//          tip = num * (20/100);
//     }else if(num >= 50 && num <= 200){
//          tip = num * (15/100);
//     }else if(num >= 200){
//          tip = num * (10/100);
//     }
//     tips.push(tip);
// }

// function calcPay(bills,tips){
//     var total;
//     for(var it=0;;it++)
//     {
//         total = bills[it] + tips[it];
//         paid.push(total);

//         if(it===bills.length-1 || it===tips.length-1)
//         {
//             break;
//         }
//     }
// }

// for(var it = 0;it<bills.length;it++)
// {
//     clacTip(bills[it]);
// }
// calcPay(bills,tips);
// console.log(tips);
// console.log(paid);

//BMI calc with object

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
