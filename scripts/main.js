setTimeout(() => {
  alert("trabajando para traslado a React");
}, 3000);

const getUserButton = document.getElementById("getUser");
const getPokeButon = document.getElementById("getPokemon");
const getJokeBtn = document.getElementById("getJoke");

import { fetchUsers, fetchPokemon, fetchJoke } from "./api.js";

getUserButton.addEventListener("click", fetchUsers);
getPokeButon.addEventListener("click", fetchPokemon);
getJokeBtn.addEventListener("click", fetchJoke);
