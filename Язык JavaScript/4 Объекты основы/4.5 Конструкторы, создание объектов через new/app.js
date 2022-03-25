function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Вася");

alert(user.name); // Вася
alert(user.isAdmin); // false
/////////////////////////////////////////////////////////////////////

function User(name) {
  // this = {};  (неявно)

  // добавляет свойства к this
  this.name = name;
  this.isAdmin = false;

  // return this;  (неявно)
}

/////////////////////////////////////////////////////////////////////

let user = {
  name: "Вася",
  isAdmin: false
};

/////////////////////////////////////////////////////////////////////

let user = new function() {
  this.name = "Вася";
  this.isAdmin = false;

  // ...другой код для создания пользователя
  // возможна любая сложная логика и выражения
  // локальные переменные и т. д.
};

/////////////////////////////////////////////////////////////////////

function User() {
  alert(new.target);
}

// без "new":
User(); // undefined

// с "new":
new User(); // function User { ... }

/////////////////////////////////////////////////////////////////////

function User(name) {
  if (!new.target) { // в случае, если вы вызвали без оператора new
    return new User(name); // ...добавим оператор new за вас
  }

  this.name = name;
}

let vasya = User("Вася"); // переадресовывает вызовы на new User
alert(vasya.name); // Вася

/////////////////////////////////////////////////////////////////////

function BigUser() {

  this.name = "Вася";

  return { name: "Godzilla" };  // <-- возвращает этот объект
}

alert( new BigUser().name );  // Godzilla, получили этот объект

function SmallUser() {

  this.name = "Вася";

  return; // <-- возвращает this
}

alert( new SmallUser().name );  // Вася

/////////////////////////////////////////////////////////////////////

let user = new User; // <-- без скобок
// то же, что и
let user = new User();

/////////////////////////////////////////////////////////////////////

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "Меня зовут: " + this.name );
  };
}

let vasya = new User("Вася");

vasya.sayHi(); // Меня зовут: Вася

/*
vasya = {
   name: "Вася",
   sayHi: function() { ... }
}
*/

/////////////////////////////////////////////////////////////////////

//Задачи

//Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true

//Да, возможно.

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

//Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
//read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//sum() возвращает сумму введённых свойств.
//mul() возвращает произведение введённых свойств.

function  calculator () {
  this.sum = function() {
    return this.a + this.b;
  },
  
  this.mul= function() {
    return this.a * this.b;
  },
  
  this.read= function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
  };

  let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//Напишите функцию-конструктор Accumulator(startingValue).
//Объект, который она создаёт, должен уметь следующее:
//Хранить «текущее значение» в свойстве value. 
//Начальное значение устанавливается в аргументе конструктора startingValue.
//Метод read() использует prompt для получения числа и прибавляет его к свойству value.
//Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(),
// с учётом начального значения startingValue.


function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('Сколько нужно добавить?', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);