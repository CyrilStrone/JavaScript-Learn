let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year == 2015) alert('Вы правы!');

if (year == 2015) {
    alert("Правильно!");
    alert("Вы такой умный!");
}
if (0) { // 0 is falsy

}
if (1) { // 1 is truthy

}
let condition = (year == 2015); // преобразуется к true или false

if (condition) {

}
let year1 = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year1 == 2015) {
    alert('Да вы знаток!');
} else {
    alert('А вот и неправильно!');
}

let year2 = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year2 < 2015) {
    alert('Это слишком рано...');
} else if (year2 > 2015) {
    alert('Это поздновато');
} else {
    alert('Верно!');
};

let accessAllowed;
let age = prompt('Сколько вам лет?', '');

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

alert(accessAllowed);

let result = условие ? значение1 : значение2;

let accessAllowed1 = (age > 18) ? true : false;

// оператор сравнения "age > 18" выполняется первым в любом случае
// (нет необходимости заключать его в скобки)
let accessAllowed2 = age > 18 ? true : false;

// то же самое
let accessAllowed3 = age > 18;

let age2 = prompt('Возраст?', 18);

let message = (age2 < 3) ? 'Здравствуй, малыш!' :
    (age2 < 18) ? 'Привет!' :
    (age2 < 100) ? 'Здравствуйте!' :
    'Какой необычный возраст!';

alert(message);

let company = prompt('Какая компания создала JavaScript?', '');

(company == 'Netscape') ?
alert('Верно!'): alert('Неправильно.');

let company2 = prompt('Какая компания создала JavaScript?', '');

if (company2 == 'Netscape') {
    alert('Верно!');
} else {
    alert('Неправильно.');
}

let CompanyName = prompt('Какое "официальное название" JavaScript?', '');

if (CompanyName == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? “ECMAScript”!');
};

let valuetwo = prompt('Напишите число пажалста', '');

if (valuetwo > 0) {
    alert('1');
} else if (valuetwo < 0) {
    alert('-1');
} else {
    alert('0');
};

let result2;

if (a + b < 4) {
    result2 = 'Мало';
} else {
    result2 = 'Много';
}

let result3 = (a + b < 4) ? 'Мало' : 'Много';

let message2;

if (login == 'Сотрудник') {
    message2 = 'Привет';
} else if (login == 'Директор') {
    message2 = 'Здравствуйте';
} else if (login == '') {
    message2 = 'Нет логина';
} else {
    message2 = '';
}

let message3 = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? "Здравствуйте" :
    (login == '') ? "Нет логина" :
    '';