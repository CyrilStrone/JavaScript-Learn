/* 
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.



P.S. Есть «подводный камень» при работе с типами.
*/

function SumScript() {
    this.read = function() {
        this.a = prompt('Введите первое число', '');
        this.b = prompt('Введите второе число', '');
    };
    this.sum = function() {
        return (Number(this.a) + Number(this.b))
    };

}

let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert(a + b);

/* 
Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

*/

function readNumber() {

    let b;
    do {
        b = prompt('Введите число', '');
    } while (typeof(b) == 'number') {

    }
    if (b === null || b === '') return null;
    return +b;

}
alert(`Число: ${readNumber()}`);

/* 
Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

Пример работы функции:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
*/
function random(min, max) {

    return Math.random() * (max - min) + min;

}
alert(`Число: ${random(1, 5)}`);
/* 
Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

Пример работы функции:
*/
function randomInteger(min, max) {

    return Math.round(Math.random() * (max - min) + min);

}
alert(`Число: ${randomInteger(1, 5)}`);