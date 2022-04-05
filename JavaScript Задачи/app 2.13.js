//let i = 3;

//while (i) {
//  alert( i-- );
//}

//let i2 = 0;
//while (++i2 < 5) alert( i2 );

//let i3 = 0;
//while (i3++ < 5) alert( i3 );

//for (let i = 0; i < 5; i++) alert( i );

//for (let i = 0; i < 5; ++i) alert( i );

for (let i = 1;i<11;i++)
{
    if(i%2 ==0){
        alert(i);
    }
}

for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

let i = 0;
while(++i<3)alert( `number ${i}!` );

let v=100;
while(prompt('Введите число больше 100','') < 100)alert('Вы ввели число меньше 100')

let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);


let easyNum = prompt('введите число больше 1','')
let easyNumMin = 1;
let g = 0;
do {
    if(g==0){
        continue
    }
    if(num <= 1 || num){
        alert('Вы ввели че то не то')
        break
    }
} while (++easyNumMin<=easyNum){
    
    if(easyNum%easyNumMin == 0){
        g++;
    }

}

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}


