
const heroTwoImage = document.querySelector('[data-heroTwo="imagem"]');
const heroTwoName = document.querySelector('[data-heroTwo="name"]')
const heroTwoIntelligence = document.querySelector('[data-heroTwo="intelligence"]')
const heroTwoStrenght = document.querySelector('[data-heroTwo="strenght"]')
const heroTwoSpeed= document.querySelector('[data-heroTwo="speed"]')
const heroTwoDurability= document.querySelector('[data-heroTwo="durability"]')
const heroTwoPower= document.querySelector('[data-heroTwo="power"]')
const heroTwoCombat= document.querySelector('[data-heroTwo="combat"]')
const heroTwoTotal = document.querySelector('[data-heroTwo="total"]')

var test = 0;

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

    console.log(heroTwoTotal.textContent)
    
    newFunction

    function newFunction() {
      var tests = heroTwoTotal.textContent;
      return heroTwoTotal.textContent;
    }
  });
}


