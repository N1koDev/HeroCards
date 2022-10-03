window.onload = function (){
  this.getRandomIntInclusive();
  this.getRandomIntInclusive();
  this.getAndShowHeroOne(numbers[0]);
  this.getAndShowHeroTwo(numbers[1]);
}

var numbers = [];

function getRandomIntInclusive(min, max){
  min = Math.ceil(1);
  max = Math.floor(731);
  numbers.push(Math.floor(Math.random() * (max - min +1)+ min));
  //return the value 
  return Math.floor(Math.random() * (max - min +1)+ min);
}
