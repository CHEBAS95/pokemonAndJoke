// setTimeout(() => {
//   alert("trabajando para traslado a React");
// }, 3000);

// const getUserButton = document.getElementById("getUser");
const getPokeButon = document.getElementById("getPokemon");
const getJokeBtn = document.getElementById("getJoke");
let pokeButon = document.querySelectorAll(".btn");


import { fetchPokemon, fetchJoke } from "./api.js";

// getUserButton.addEventListener("click", fetchUsers);
getPokeButon.addEventListener("click", fetchPokemon);
getJokeBtn.addEventListener("click", fetchJoke);
console.log(pokeButon);
// if(pokeButon.length == 0){
//   alert("nodo en cero")
// }else{
//   alert("no hellow")
//   pokeButon.forEach((butonElement)=>{
//     butonElement.addEventListener("click", getDataPoke)
//   })
// }