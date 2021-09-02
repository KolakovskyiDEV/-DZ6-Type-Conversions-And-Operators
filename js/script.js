//  Task# 1 


// 1.
    Boolean(Number('10')) + 1; //Вернёт: 2
// 2.
'sub' + Number(false); //Вернёт: sub0
// 3.
16 * '      91    '; //Вернёт: 1456
// 4.
true - 70; //Вернёт: -69
// 5.
Number(1 + String(1)) + 1; //Вернёт: 12
// Task# 2


let hourSec = 60 * 60;
let hour = prompt('введите количество часов');
let resultSec = hour * hourSec;
alert(resultSec);

//Task #3 


var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num = ++num;
num = num - 1;
alert(num);