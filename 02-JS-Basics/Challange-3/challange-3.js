var bills = [124, 48, 268];
var tips = [], paid = [], i;
function clacTip(num){
    var tip;
    if(num < 50){
         tip = num * (20/100);
    }else if(num >= 50 && num <= 200){
         tip = num * (15/100);
    }else if(num >= 200){
         tip = num * (10/100);
    }
    tips.push(tip);
}

function calcPay(bills,tips){
    var total;
    for(var it=0;;it++)
    {
        total = bills[it] + tips[it];
        paid.push(total);

        if(it===bills.length-1 || it===tips.length-1)
        {
            break;
        }
    }
}

for(var it = 0;it<bills.length;it++)
{
    clacTip(bills[it]);
}
calcPay(bills,tips);
console.log(tips);
console.log(paid);