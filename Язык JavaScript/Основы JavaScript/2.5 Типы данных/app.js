let message = "hello";
message = 123456;

let n = 123;
n = 12.345;

alert(1 / 0); //Infinity
alert(Infinity); //Infinity

alert("Не число" / 2) //Nan
alert("Не число" / 2 + 5)


let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

let name = "Иван";

// Вставим переменную
alert(`Привет, ${name}!`); // Привет, Иван!

// Вставим выражение
alert(`результат: ${1 + 2}`); // результат: 3

let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено

let isGreater = 4 > 1;

alert(isGreater); // true (результатом сравнения будет "да")

let age = null;

let age;

alert(age); // выведет "undefined"

let age = 123;

// изменяем значение на undefined
age = undefined;

alert(age); // "undefined"

typeof undefined // "undefined"

typeof 0 // "number"


typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)