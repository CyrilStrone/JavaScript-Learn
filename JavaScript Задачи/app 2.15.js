function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
}

function checkAge(age) {
    return (age > 18)?true:confirm('Родители разрешили?');
}


function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }


function min(a,b){
    return (a>b)?b:a
}

function pow(x,n){
    y=1;
    z =x;
    while(y<n){
        z=z*x;
        y++;
    }
    return(z)
}

alert(pow(4,3))

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }