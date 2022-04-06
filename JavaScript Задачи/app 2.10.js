
function checkJS(){
    let a = prompt(' Какое официальное название JavaScript? ', '')
    if(a == null  || a == ''){
        return(alert('Вы ничего не ввели!'))
        
    }
    else if (a == 'ESMAScript') {
        return(alert('Верно!'))
    } else {
        return(alert('Не знаете? “ECMAScript”'))
    }
}



function checkNumber(){
    let a = prompt(' Введите число ', '')
    if(a == null  || a == ''){
        return(alert('Вы ничего не ввели!'))
        
    }
    else if (a > 0) {
        return(alert('1'))
    } 
    else if (a < 0) {
        return(alert('-1'))
    }else {
        return(alert(0))
    }
}



let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
result = (a + b < 4) ? 'Мало': 'Много';
 


let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

message = (login =='Сотрудник') ? 'Привет':
(login =='Директор') ? 'Здравствуйте':
(login =='') ? 'Нет логина': '';