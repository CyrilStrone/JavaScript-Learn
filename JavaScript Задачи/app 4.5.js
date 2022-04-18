/* 
Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
*/

let obj = {};

function A() { return obj; }

function B() { return obj; }

alert(new A() == new B());

/* 
Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

function Calculator() {

    this.read = function() {
        this.a = prompt('Введите первое число', '');
        this.b = prompt('Введите второе число', '');
    };
    this.sum = function() {
        return (Number(this.a) + Number(this.b))
    };
    this.mul = function() {
        return (Number(this.a) * Number(this.b))
    };
};

let calculator = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
/* 
Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:
*/
function Accumulator(startingValue) {

    this.value = startingValue;


    this.read = function() {
        this.value = Number(this.value) + Number(prompt('Введите число', ''));
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();
alert(accumulator.value);