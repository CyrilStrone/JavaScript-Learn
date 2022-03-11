result = a || b;

alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false

if (1 || 0) { // работает как if( true || false )
    alert('truthy!');
}

let hour = 9;

if (hour < 10 || hour > 18) {
    alert('Офис закрыт.');
}

let hour2 = 12;
let isWeekend = true;

if (hour2 < 10 || hour2 > 18 || isWeekend) {
    alert('Офис закрыт.'); // это выходной
}

alert(1 || 0); // 1
alert(true || 'no matter what'); // true

alert(null || 1); // 1 (первое истинное значение)
alert(null || 0 || 1); // 1 (первое истинное значение)
alert(undefined || null || 0); // 0 (поскольку все ложно, возвращается последнее значение)

let currentUser = null;
let defaultUser = "John";

let name = currentUser || defaultUser || "unnamed";

alert(name); // выбирается "John" – первое истинное значение

let x;

true || (x = 1);

alert(x); // undefined, потому что (x = 1) не вычисляется

let x2;

false || (x2 = 1);

alert(x2); // 1

result = a && b;

alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false

let hour3 = 12;
let minute = 30;

if (hour3 == 12 && minute == 30) {
    alert('The time is 12:30');
}

if (1 && 0) { // вычисляется как true && false
    alert("не сработает, так как результат ложный");
}

// Если первый операнд истинный,
// И возвращает второй:
alert(1 && 0); // 0
alert(1 && 5); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert(null && 5); // null
alert(0 && "no matter what"); // 0

alert(1 && 2 && null && 3); // null

alert(1 && 2 && 3); // 3

let x3 = 1;

(x3 > 0) && alert('Greater than zero!');
if (x3 > 0) {
    alert('Greater than zero!');
}

alert(!true); // false
alert(!0); // true

alert(!!"non-empty string"); // true
alert(!!null); // false

alert(Boolean("non-empty string")); // true
alert(Boolean(null)); // false

let age;
if (age >= 14 && age <= 30) {
    alert('Работаем');
}

if (!(age >= 14 && age <= 30)) {
    alert('Работаем');
}

if (age < 14 && age > 30) {
    alert('Работаем');
}

let value = prompt('Кто там', '');

if (value == 'Отмена') {
    alert('Отменено');
} else if (value == 'Админ') {
    let valuetwo = prompt('Пароль', '');
    if (valuetwo == 'Отмена') {
        alert('Отменено');
    } else if (valuetwo == 'Я Главный') {
        alert('Здравствуйте');
    } else {
        alert('Неверный пароль');
    }
} else {
    alert('Я вас не знаю');
}

let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

    let pass = prompt('Пароль?', '');

    if (pass === 'Я главный') {
        alert('Здравствуйте!');
    } else if (pass === '' || pass === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }

} else if (userName === '' || userName === null) {
    alert('Отменено');
} else {
    alert("Я вас не знаю");
}