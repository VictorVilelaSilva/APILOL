
import axios from 'axios';
import fetch from 'node-fetch';




//enquanto houver espeaço
const APIKey = 'RGAPI-3386a2f1-66b7-4bee-989b-0c1e480991fe';
const name = "É o Dino ne";
let nome = "";

//faz o request para a API
var request = 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + name + '?api_key=' + APIKey;
fetch(request).then(response => {
    return response.json();
}).then(corpo => {
    console.log(corpo);
})

