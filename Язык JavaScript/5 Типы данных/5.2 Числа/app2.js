function random(min, max) {
    let numRandom;
    
    while( numRandom < min && numRandom >max){
        numRandom = Math.random()
    }
    alert(numRandom)
}
  

alert( random(1, 5) );