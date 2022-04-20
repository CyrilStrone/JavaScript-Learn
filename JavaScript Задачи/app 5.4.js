/* 
Что выведет следующий код?
*/
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert(fruits.length); // ?
/* 
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:
*/

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
let a = Math.ceil(styles.length / 2)
alert(a)
styles[a - 1] = "Классика";
alert(styles.shift())
styles.unshift("Рэп", "Регги");
alert(styles)

/* 
Каков результат? Почему?
*/
let arr = ["a", "b"];

arr.push(function() {
    alert(this);
})

arr[2](); // ?
/* 
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/


function sumInput() {

    let arrey = [];
    while (true) {
        let value = prompt("Введите число", 0);
        if (value === "" || value === null || !isFinite(value)) break;
        arrey.unshift(+value);

    }
    let sum = 0;
    for (key of arrey) {
        sum += Number(key);
    }
    return sum;

}
alert(sumInput());
/* 
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:
*/
function getMaxSubSum(arr) {
    let maxSum = 0; // если элементов не будет - возвращаем 0

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }

    return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([1, 2, 3])); // 6
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100