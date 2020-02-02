var heightMark = 1
var heightJhon = 1.2

var massMark = 56;
var massJhon = 67;

var MarkBMI = massMark / ( heightMark * heightMark );
var JhonBMI = massJhon / ( heightJhon * heightJhon );

isMark = MarkBMI > JhonBMI;

console.log(MarkBMI , JhonBMI);
 console.log(isMark)