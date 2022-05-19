import fetch from 'node-fetch';

const API = 'https://rickandmortyapi.com/api/character/1';

fetch(API)
    .then(data => {return data.json()})
    .then(res => console.log(res));