//////////////////////////////////////////////////////////////////////

let user = {}; // пользователь без свойства address

alert(user.address.street); // ошибка!

//////////////////////////////////////////////////////////////////////

// Произойдёт ошибка, если querySelector(...) равен null.
let html = document.querySelector('.my-element').innerHTML;

//////////////////////////////////////////////////////////////////////

let user = {}; // пользователь без адреса

alert( user && user.address && user.address.street ); // undefined (без ошибки)

//////////////////////////////////////////////////////////////////////

let user = {}; // пользователь без адреса

alert( user?.address?.street ); // undefined (без ошибки)

//////////////////////////////////////////////////////////////////////

let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined

//////////////////////////////////////////////////////////////////////

// ReferenceError: user is not defined
user?.address;

//////////////////////////////////////////////////////////////////////

let user = null;
let x = 0;

user?.sayHi(x++); // нет user, поэтому до x++ вычисление не дойдет

alert(x); // 0, значение не было увеличено на единицу

//////////////////////////////////////////////////////////////////////

let user1 = {
    admin() {
      alert("Я администратор");
    }
  }
  
  let user2 = {};
  
  user1.admin?.(); // Я администратор
  user2.admin?.();

//////////////////////////////////////////////////////////////////////

let user1 = {
  firstName: "Иван"
};

let user2 = null; // Представим, что пользователь не авторизован

let key = "firstName";

alert( user1?.[key] ); // Иван
alert( user2?.[key] ); // undefined

alert( user1?.[key]?.something?.not?.existing); // undefined
//////////////////////////////////////////////////////////////////////

delete user?.name; // Удалить user.name, если пользователь существует

//////////////////////////////////////////////////////////////////////

let user;

user?.name = "John"; // Ошибка, это не сработает
// это по сути то же самое что undefined = "John"

//////////////////////////////////////////////////////////////////////