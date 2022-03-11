result = (a !== null && a !== undefined) ? a : b;

let user;

alert(user ?? "Аноним"); // Аноним

let user2 = "Иван";

alert(user2 ?? "Аноним"); // Иван

let firstName = null;
let lastName = null;
let nickName = "Суперкодер";

// показывает первое определённое значение:
alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер


// показывает первое истинное значение:
alert(firstName || lastName || nickName || "Аноним"); // Суперкодер

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

let height2 = null;
let width = null;

// важно: используйте круглые скобки
let area = (height2 ?? 100) * (width ?? 50);

alert(area); // 5000

// без круглых скобок
let area2 = height ?? 100 * width ?? 50;

// ...то же самое, что предыдущее выражение (вероятно, это не то, что нам нужно):
let area3 = height ?? (100 * width) ?? 50;

let x = 1 && 2 ?? 3; // Синтаксическая ошибка

let x2 = (1 && 2) ?? 3; // Работает без ошибок

alert(x); // 2