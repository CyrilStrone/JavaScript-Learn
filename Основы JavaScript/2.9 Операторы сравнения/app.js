alert( 2 > 1 );  // true (верно)
alert( 2 == 1 ); // false (неверно)
alert( 2 != 1 ); // true (верно)

let result = 5 > 4; // результат сравнения присваивается переменной result
alert( result ); // true

alert( 'Я' > 'А' ); // true
alert( 'Коты' > 'Кода' ); // true
alert( 'Сонный' > 'Сон' ); // true

alert( '2' > 1 ); // true, строка '2' становится числом 2
alert( '01' == 1 ); // true, строка '01' становится числом 1

alert( true == 1 ); // true
alert( false == 0 ); // true

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!

alert( 0 == false ); // true

alert( '' == false ); // true

alert( 0 === false ); // false, так как сравниваются разные типы

alert( null === undefined ); // false

alert( null == undefined ); // true

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)