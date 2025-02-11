const endpointUsers = "https://jsonplaceholder.typicode.com/users/";
const endpointPokemon = "https://pokeapi.co/api/v2/pokemon";
const endpointJoke = "https://v2.jokeapi.dev/joke/any";

export function fetchUsers() {
  fetch(endpointUsers)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP : ERROR : STATUS: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      getNameApi(data);
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });
}

export function fetchPokemon() {
  let limit = 20;
  let offset = 0;
  const endpoint2 = `${endpointPokemon}?limit=${limit}&offset=${offset}`;
  limit += 20;
  offset += 20;
  
  fetch(endpoint2)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error in the status pokemon: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
      getPokemon(data.results);
    })
    .catch((error) => {
      console.error("Error fetching pokemon:", error);
    });
}

export function fetchJoke() {
  fetch(endpointJoke)
    .then((response) => {
      if (!response.ok) {
        console.error("Error en la peticion:", response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log(typeof data);
      getJoke(data);
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
    });
}

function getNameApi(data) {
  const listUser = document.getElementById("users");
  data.forEach((item) => {
    let button = document.createElement("button");
    button.classList.add("btn");
    button.setAttribute("id", item.id);
    button.textContent = item.name;
    listUser.appendChild(button);
  });
}

function getPokemon(data) {
  let pokeBox = document.getElementById("pokemon");
  data.forEach((item) => {
    let button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = item.name;
    pokeBox.appendChild(button);
  });
}

function getJoke(joke) {
  let showJokeBox = document.getElementById("joke");

  if (Object.hasOwn(joke, "joke")) {
    createElement(joke.joke, "h4");
  } else if (Object.hasOwn(joke, "setup")) {
    createElement(joke.setup, "h4");
    setTimeout(() => {
      createElement(joke.delivery, "h6");
    }, 5000);
  } else {
    alert("Error en la obtencion del chiste");
    console.error("Error en el cuerpo de chiste.");
  }

  function createElement(paramsBody, type) {
    let textJoke = document.createElement(type);
    showJokeBox.appendChild(textJoke);
    textJoke.textContent = paramsBody;
  }
}
