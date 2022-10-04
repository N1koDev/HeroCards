const BASE_URL = 'https://www.superheroapi.com/api.php/';
const API_KEY = '5825688267441302';

function callAPI(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', url, true);
  xhr.onload = function(){
    if(xhr.status === 200){
      callback(xhr.status, xhr.response);
    }
    else {
      alert('Problemas ao conectar com o servidor!')
    }
  }
  xhr.send();
}

///////////

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

//////////

const heroOneImage = document.querySelector('[data-heroOne="imagem"]');
const heroOneName = document.querySelector('[data-heroOne="name"]')
const heroOneIntelligence = document.querySelector('[data-heroOne="intelligence"]')
const heroOneStrenght = document.querySelector('[data-heroOne="strenght"]')
const heroOneSpeed = document.querySelector('[data-heroOne="speed"]')
const heroOneDurability = document.querySelector('[data-heroOne="durability"]')
const heroOnePower = document.querySelector('[data-heroOne="power"]')
const heroOneCombat = document.querySelector('[data-heroOne="combat"]')
const heroOneTotal = document.querySelector('[data-heroOne="total"]')

function getAndShowHeroOne(id){
  var url = BASE_URL + "/" + API_KEY + "/" + id;

  callAPI(url, function(status, data){

    let image = data.image.url;
    let name = data.name;
    let intelligence = parseInt(data.powerstats.intelligence);
    let strength = parseInt(data.powerstats.strength);
    let speed = parseInt(data.powerstats.speed);
    let durability = parseInt(data.powerstats.durability);
    let power = parseInt(data.powerstats.power);
    let combat = parseInt(data.powerstats.combat);

    heroOneImage.src = image
    heroOneName.textContent = name;
    heroOneIntelligence.textContent = intelligence + " intelligence";
    heroOneStrenght.textContent = strength + " strength";
    heroOneSpeed.textContent = speed + " speed";
    heroOneDurability.textContent = durability + " durability";
    heroOnePower.textContent = power + " power";
    heroOneCombat.textContent = combat + " combat";

    heroOneTotal.textContent = intelligence + strength + speed + durability + power + combat;

    if(heroOneTotal.textContent == "NaN"){
      getAndShowHeroOne(getRandomIntInclusive())
    }
    else if(heroOneImage.src == "NaN"){
      getAndShowHeroOne(getRandomIntInclusive())
    }

  });
}

const heroTwoImage = document.querySelector('[data-heroTwo="imagem"]');
const heroTwoName = document.querySelector('[data-heroTwo="name"]')
const heroTwoIntelligence = document.querySelector('[data-heroTwo="intelligence"]')
const heroTwoStrenght = document.querySelector('[data-heroTwo="strenght"]')
const heroTwoSpeed= document.querySelector('[data-heroTwo="speed"]')
const heroTwoDurability= document.querySelector('[data-heroTwo="durability"]')
const heroTwoPower= document.querySelector('[data-heroTwo="power"]')
const heroTwoCombat= document.querySelector('[data-heroTwo="combat"]')
const heroTwoTotal = document.querySelector('[data-heroTwo="total"]')

function getAndShowHeroTwo(id){
  var url = BASE_URL + "/" + API_KEY + "/" + id;

  callAPI(url, function(status, data){
    let image = data.image.url;
    let name = data.name;
    let intelligence = parseInt(data.powerstats.intelligence);
    let strength = parseInt(data.powerstats.strength);
    let speed = parseInt(data.powerstats.speed);
    let durability = parseInt(data.powerstats.durability);
    let power = parseInt(data.powerstats.power);
    let combat = parseInt(data.powerstats.combat);

    heroTwoImage.src = image;
    heroTwoName.textContent = name;
    heroTwoIntelligence.textContent = intelligence + ' intelligence';
    heroTwoStrenght.textContent = strength + ' strength';
    heroTwoSpeed.textContent = speed + ' speed';
    heroTwoDurability.textContent = durability + ' durability';
    heroTwoPower.textContent = power + ' power';
    heroTwoCombat.textContent = combat + ' combat';

    heroTwoTotal.textContent = intelligence + strength + speed + durability + power + combat;

    if(heroTwoTotal.textContent == "NaN"){
      getAndShowHeroTwo(getRandomIntInclusive())
    }
    else if(heroTwoImage.src == "NaN"){
      getAndShowHeroTwo(getRandomIntInclusive())
    }

  });
}

///////

const btnTestHero = document.querySelector('[data-btn="testHero"]')
const versusResult = document.querySelector('[data-versus="result"]')

btnTestHero.addEventListener('click', () => {

  if (parseInt(heroOneTotal.textContent) > parseInt(heroTwoTotal.textContent)){
    versusResult.textContent = "O "  + heroOneName.textContent + " venceu";
  }
  else{
    versusResult.textContent = "O "  + heroTwoName.textContent + " venceu"
  }

})

const btnTrocaHero = document.querySelector('[data-btn="trocaHero"]')

btnTrocaHero.addEventListener('click', () => {
  getAndShowHeroOne(getRandomIntInclusive())
  getAndShowHeroTwo(getRandomIntInclusive())

  versusResult.textContent = " "
})


