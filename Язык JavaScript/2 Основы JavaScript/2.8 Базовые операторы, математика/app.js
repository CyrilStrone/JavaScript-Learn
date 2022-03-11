let x = 1;

x=-x
alert(x);//-1 унарный минус

let x =1, y = 3;
alert(y-x);//2, бинарный минус

alert(5%2);//1
alert(8%3);//2

alert( 2 ** 2 ); // 4  (2 умножено на себя 2 раза)
alert( 2 ** 3 ); // 8  (2 * 2 * 2, 3 раза)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2, 4 раза)

alert( 4 ** (1/2) ); // 2 (степень 1/2 эквивалентна взятию квадратного корня)
alert( 8 ** (1/3) ); // 2 (степень 1/3 эквивалентна взятию кубического корня)


let s = " моя "+"строка";
alert(s);//моястрока

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // будет "41", а не 221

alert( 6 - '2' ); // 4, '2' приводится к числу
alert( '6' / '2' ); // 3, оба операнда приводятся к числам

// Не влияет на числа
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Преобразует не числа в числа
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", так как бинарный плюс объединяет строки

let apples = "2";
let oranges = "3";

// оба операнда предварительно преобразованы в числа
alert( +apples + +oranges ); // 5

// более длинный вариант
// alert( Number(apples) + Number(oranges) ); // 5

let x = 2 * 2 + 1;

alert( x ); // 5

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0

let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4

let n = 2;
n += 5; // теперь n = 7 (работает как n = n + 5)
n *= 2; // теперь n = 14 (работает как n = n * 2)

alert( n ); // 14

let n = 2;

n *= 3 + 5;

alert( n ); // 16  (сначала выполнится правая часть, выражение идентично n *= 8)

let counter = 2;
counter++;        // работает как counter = counter + 1, просто запись короче
alert( counter ); // 3

let counter = 2;
counter--;        // работает как counter = counter - 1, просто запись короче
alert( counter ); // 1

let counter = 1;
let a = ++counter; // (*)

alert(a); // 2

let counter = 1;
let a = counter++; // (*) меняем ++counter на counter++

alert(a); // 1

let counter = 0;
counter++;
++counter;
alert( counter ); // 2, обе строки сделали одно и то же


let counter = 0;
alert( ++counter ); // 1

let counter = 0;
alert( counter++ ); // 0

let counter = 1;
alert( 2 * ++counter ); // 4

let counter = 1;
alert( 2 * counter++ ); // 2, потому что counter++ возвращает "старое" значение

let a = (1 + 2, 3 + 4);

alert( a ); // 7 (результат вычисления 3 + 4

// три операции в одной строке
for (a = 1, b = 3, c = a * b; a < 10; a++) {
    
   }