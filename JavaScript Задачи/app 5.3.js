/* 
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
*/
function ucFirst(string) {
    if (!str) return str;
    return (string[0].toUpperCase() + string.slice(1));

}
alert(ucFirst("вася") == "Вася");
/* 
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:
*/
function checkSpam(string) {
    let lowerStr = string.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');

}

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
    /* 
    Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

    Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

    Например:
*/
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}
/* 
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 ); // true
*/
function extractCurrencyValue(str) {
    return +str.slice(1);
}