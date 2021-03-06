//////////////////////////////////////////////////////////////////////

if (condition) {
  // делай это
  // ...и это
  // ...и потом это
}

////////////////////////////////////////////////////////////////////// 

if (n < 0) alert(`Степень ${n} не поддерживается`);

////////////////////////////////////////////////////////////////////// 

if (n < 0) {
  alert(`Степень ${n} не поддерживается`);
}

//////////////////////////////////////////////////////////////////////

// обратные кавычки ` позволяют разделять строку на части
let str = `
  Рабочая группа TC39 организации Ecma International -
  это группа JavaScript-разработчиков, теоретиков и авторов движков JavaScript,
  которые вместе с сообществом занимаются поддержкой и развитием языка JavaScript.
`;

//////////////////////////////////////////////////////////////////////

if (
  id === 123 &&
  moonPhase === 'Waning Gibbous' &&
  zodiacSign === 'Libra'
) {
  letTheSorceryBegin();
}

//////////////////////////////////////////////////////////////////////

show(parameters,
    aligned, // 5 пробелов слева
    one,
    after,
    another
 ) {
 // ...
}

//////////////////////////////////////////////////////////////////////

function pow(x, n) {
  let result = 1;
  //              <--
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  //              <--
  return result;
}

//////////////////////////////////////////////////////////////////////

for (let i = 0; i < 10; i++) {
  if (cond) {
    ... // <- ещё один уровень вложенности
  }
}

for (let i = 0; i < 10; i++) {
  if (!cond) continue;
  ...  // <- нет лишнего уровня вложенности
}
//////////////////////////////////////////////////////////////////////

function pow(x, n) {
  if (n < 0) {
    alert("Отрицательные значения 'n' не поддерживаются");
  } else {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }
}

function pow(x, n) {
  if (n < 0) {
    alert("Отрицательные значения 'n' не поддерживаются");
    return;
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

//////////////////////////////////////////////////////////////////////

//Если вы пишете несколько вспомогательных функций, а затем используемый ими код, то существует три способа организации функций.

// объявление функций
function createElement() {
  ...
}

function setHandler(elem) {
  ...
}

function walkAround() {
  ...
}

// код, который использует их
let elem = createElement();
setHandler(elem);
walkAround();

// код, использующий функции
let elem = createElement();
setHandler(elem);
walkAround();

// --- вспомогательные функции ---
function createElement() {
  ...
}

function setHandler(elem) {
  ...
}

function walkAround() {
  ...
}