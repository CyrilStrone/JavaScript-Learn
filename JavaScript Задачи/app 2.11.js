//alert( null || 2 || undefined );
//alert( alert(1) || 2 || alert(3) );
//alert( 1 && null && 2 );
//alert( alert(1) && alert(2) );
//alert( null || 2 && 3 || 4 );


let age = prompt('Введите число', '');
//if (!(age >= 14 && age <= 90))
if( age <= 15 || age >= 90 ){
    alert('Число класс')
}
else{
    alert('Число не класс')
}

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

let Name = prompt('Введите Имя', '');
if( Name=='Админ' ){
    let Password = prompt('Введите Пароль', '');
    if(Password=='Я главный'){
        alert('Здравсвуйте');
    }
    else if(Password==null){
        alert('Отменено');
    }
    else{
        alert('Неверный пароль')
    }
}
else if(Name ==null){
    alert('Отменено')
}
else{
    alert('Я вас не знаю')
}

let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}