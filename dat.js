"use strict";

console.log("Javascript is running");

window.addEventListener("load", initApp);

async function initApp() {
  console.log("initApp");
  const pokemonDataFetch = await fetchJSON();
  /* pokemonPlural.forEach(showPokemon); */
  for (let pokemonInfo of pokemonDataFetch) {
    showPokemon(pokemonInfo);
  }
}
async function fetchJSON() {
  console.log("JSON being fetched");
  const response = await fetch(
    "https://cederdorff.github.io/dat-js/05-data/pokemons.json"
  );
  const data = await response.json();
  return data;
}

/* Function that inserts to fetched JSON data into the grid */
function showPokemon(pokemon) {
  console.log("showPokemon");

  let myHTML = /*HTML*/ `
  <article id=poke-container>
        <img src=${pokemon.image}>
        <b>Name:</b> ${pokemon.name}<br>
        <b>Index:</b> ${pokemon.dexindex}
  </article>   
`;

  document
    .querySelector("#pokemon-view")
    .insertAdjacentHTML("beforeend", myHTML);

  /* Listens for clicks on items in the grid */
  document
    .querySelector("#pokemon-view article:last-child")
    .addEventListener("click", pokemonClicked);

  /* Nested function that fires when you click an item in the grid */
  function pokemonClicked() {
    console.log("pokemonClicked");

    let pokemonInfo = /*html*/ ` 
    <article id=pokemon-info-list>
        <img src=${pokemon.image}>
        <li><b>Name:</b> ${pokemon.name}</li>
        <li><b>Description:</b> ${pokemon.description}</li>
        <li><b>Pokédex index:</b> ${pokemon.dexindex}</li>
        <li><b>Type:</b> ${pokemon.type}</li>
        <li>${subType(pokemon)}</li>
        <li><b>Gender:</b> ${pokemon.gender}</li>
        <li><b>Weight:</b> ${pokemon.weight}g</li>
        <li><b>Height:</b> ${pokemon.height}cm</li>
        <li><b>Generation:</b> ${pokemon.generation}</li>
        <li>${canItEvolve(pokemon)}</li>
        <li><b>Ability: </b>${pokemon.ability}</li>
        <li><b>HP:</b> ${pokemon.statsHP}</li>
        <li><b>Attack:</b> ${pokemon.statsAttack}</li>
        <li><b>Defence:</b> ${pokemon.statsDefence}</li>
        <li><b>Special Attack:</b> ${pokemon.statsSpecialAttack}</li>
        <li><b>Special Defence:</b> ${pokemon.statsSpecialDefence}</li>
        <li><b>Speed:</b> ${pokemon.statsSpeed}</li>
        <li><b>Weaknesses:</b> ${pokemon.weaknesses}</li>
        <img id=footprint src=${pokemon.footprint}><br>
        <button id="detail-view-btn">Close</button>
     </article>   
    `;

    /* Inserts HTML into the detail-view */
    document
      .querySelector("#pokemon-detail-view")
      .insertAdjacentHTML("beforeend", pokemonInfo);

    /* Opens the detail-view in a modal window and scrolls to top of said window */
    document.querySelector("#pokemon-detail-view").showModal(pokemon);
    document.querySelector("#pokemon-detail-view").scrollTop = 0;

    /* Listens for click on the close button in the modal window */
    document
      .querySelector("#detail-view-btn")
      .addEventListener("click", closeDialog);
  }
}

/* If / else - functions to give explanatory outputs, instead of true/false or null/undefined */
function canItEvolve(pokemon) {
  console.log("canItEvolve");
  console.log(pokemon);
  let HTML = "";
  if (pokemon.canEvolve === false) {
    HTML = /*html*/ `
        <b>Can evolve:</b> No, it can't evolve.
    `;
  } else {
    HTML = /*html*/ `
        <b>Can evolve:</b> Yes, it can evolve.
    `;
  }
  return HTML;
}
function subType(pokemon) {
  console.log("subType");
  console.log(pokemon);
  let HTML = "";
  if (
    pokemon.subtype === "" ||
    pokemon.subtype === false ||
    pokemon.subtype === undefined ||
    pokemon.subtype === null ||
    pokemon.subtype === "undefined"
  ) {
    HTML = /*html*/ `
        <b>Subtype:</b> None
    `;
  } else {
    HTML = /*html*/ `
        <b>Subtype:</b> ${pokemon.subtype}
    `;
  }
  return HTML;
}

/* Function to close the detail-view and remove existing HTML, so it doesn't "stack" itself */
function closeDialog() {
  console.log("closeDialog");
  document.querySelector("#pokemon-detail-view").close();
  document.querySelector("#pokemon-info-list").remove();
}
