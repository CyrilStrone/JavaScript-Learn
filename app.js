// 1 переменные 
// camelCase
var name = 'Cyril'
//var менять можно
let lastName = 'Strone'
const  first_name = 'Так писать не круто'
const firstName = 'Так писать круто'
const age = 26
const isProgrammer = true

//let менять можно и на другой тип
//var отстой 
//лучше исопльзовать const, он почти не меняется


name = 'Kirill'

console.log(isProgrammer)


const _private = 'private'
const $ = 'norm'
//ваще норм переменная

const withNum = '5'
//const withNum = 5 err
//называть переменную с числа нельзя


// 2 Мутирование

console.log('Имя человека: ' + name + ', а возраст человека ' + age)


lastName = prompt('Введите фаимлию ')
alert(name + ' '+lastName)

// 3 Операторы