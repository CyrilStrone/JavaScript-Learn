// Этот код делает это (...) и вот это (...)
// ...и кто знает, что ещё...
очень;
сложный;
код;

//////////////////////////////////////////////////////////////////////

function showPrimes(n) {
  nextPrime:
  for (let i = 2; i < n; i++) {

    // проверяем, является ли i простым числом
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i);
  }
}

//////////////////////////////////////////////////////////////////////

function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}

//////////////////////////////////////////////////////////////////////

// здесь мы добавляем виски
for(let i = 0; i < 10; i++) {
    let drop = getWhiskey();
    smell(drop);
    add(drop, glass);
  }
  
  // здесь мы добавляем сок
  for(let t = 0; t < 3; t++) {
    let tomato = getTomato();
    examine(tomato);
    let juice = press(tomato);
    add(juice, glass);
  }

  addWhiskey(glass);
addJuice(glass);

//////////////////////////////////////////////////////////////////////

function addWhiskey(container) {
  for(let i = 0; i < 10; i++) {
    let drop = getWhiskey();
    //...
  }
}

function addJuice(container) {
  for(let t = 0; t < 3; t++) {
    let tomato = getTomato();
    //...
  }
}

//////////////////////////////////////////////////////////////////////

/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x возведённое в n-ную степень.
 */
function pow(x, n) {
  ...
}
//////////////////////////////////////////////////////////////////////
