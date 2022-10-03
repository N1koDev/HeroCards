
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
    heroOneIntelligence.textContent = intelligence;
    var test = intelligence;
    heroOneStrenght.textContent = strength;
    heroOneSpeed.textContent = speed;
    heroOneDurability.textContent = durability;
    heroOnePower.textContent = power;
    heroOneCombat.textContent = combat;

    heroOneTotal.textContent = intelligence + strength + speed + durability + power + combat;

    console.log(heroOneTotal.textContent)

  });
}


