/* 
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/

let calculator = {
    a: 0,
    b: 0,
    read() {
        this.a = prompt('Введите первое число', '');
        this.b = prompt('Введите второе число', '');
    },
    sum() {
        return (Number(this.a) + Number(this.b))
    },
    mul() {
        return (Number(this.a) * Number(this.b))
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

/* 
ladder.up().up().down().showStep(); // 1
*/
let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function() { // показывает текущую ступеньку
        alert(this.step);
    }
};
let ladder2 = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
}

ladder2.up().up().down().up().down().showStep(); // 1