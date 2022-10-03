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