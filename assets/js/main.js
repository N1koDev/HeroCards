const BASE_URL = 'https://www.superheroapi.com/api.php/';
const API_KEY = '5825688267441302';

window.onload = function (){
  this.getAndShowHero(getRandom());
}

function getRandom(){
  return Math.floor(Math.random() * 731) + 1;
}

function getAndShowHero(id){
  var url = BASE_URL + "/" + API_KEY + "/" + id;

  callAPI(url, function(status, data){
    let name = data.name;
    let intelligence = data.powerstats.intelligence;
    let strenght = data.powerstats.strenght;
    let speed = data.powerstats.speed;
    let durability = data.powerstats.durability;
    let power = data.powerstats.power;
    let combat = data.powerstats.combat;
    let image = data.image.url;

    document.getElementById("content").innerHTML += "<article> <img src='" + image + "'/> " + 
    "<h1>" + name + "</h1>" +
    "<p>Intelligence: <span style='width:" + intelligence + "% background-color: #F9B32F'></span></p>" +
    "<p>Strenght: <span style='width:" + strenght + "%;        background-color: #F9B33F'></span></p>" +
    "<p>Speed: <span style='width:" + speed + "%;              background-color: #F9B33F'></span></p>" +
    "<p>Durability: <span style='width:" + durability + "%;    background-color: #F9B33F'></span></p>" +
    "<p>Power: <span style='width:" + power + "%;              background-color: #F9B33F'></span></p>" +
    "<p>Combat: <span style='width:" + combat + "%;            background-color: #F9B33F'></span></p>" +
    "</article>";
  });
}

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